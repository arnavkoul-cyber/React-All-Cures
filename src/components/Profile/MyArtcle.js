import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
// import EditModal from './EditModal'
import {Container} from "react-bootstrap";
// import PostArticle from '././components/BlogPage/PostArticle';
import { backendHost } from '../../api-config';
import ListArticle from './ListArticle'
import Cookies from 'js-cookie';

export default class Blogpage extends Component{

    constructor(props) {
        super(props);
        const params = props.match.params
        this.state = { 
          // url: props.url,
          param: params,
          items: [],
          isLoaded: false,
          regionPostsLoaded: false,
          country: new URLSearchParams(this.props.location.search).get('c'),
          diseaseCondition: new URLSearchParams(this.props.location.search).get('dc'),
          acPerm: Cookies.get('acPerm').split('|')
        };
      }
    

      PostArticles() {                        // For all available blogs "/blogs"
        fetch(`${backendHost}/article/allkv`)
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              isLoaded: true,
              items: json,
            });
          });
      }
      
      diseasePosts(type){                     // For specific blogs like "/blogs/diabetes"
        if(type){
          fetch(`${backendHost}/isearch/${type}`)
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              isLoaded: true,
              items: json,
            });
          });
        }
        else {
          fetch(`${backendHost}/isearch/${this.props.match.params.type}`)
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              isLoaded: true,
              items: json,
            });
          });
        }
      }

      regionalPosts(){
        fetch(`${backendHost}/isearch/treatmentregions/2`)          // /isearch/treatmentregions/${this.state.diseaseCondition}
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            regionPostsLoaded: true,
            items: json,
          });
        })
      }

      componentDidMount() {
        if(this.state.param.type){
          this.diseasePosts()
        } else if(this.props.location.search){
          this.regionalPosts()
        } else {
          this.PostArticles()
        }
      }

      componentDidUpdate(prevProps){
        if ( prevProps.match.params.type !== this.props.match.params.type){
          this.diseasePosts(this.props.match.params.type)
        }
      }
      
    render(){
        var { isLoaded,items, regionPostsLoaded } = this.state;

        if(!isLoaded && !regionPostsLoaded) {
        return (
        <>
          <Header history={this.props.history}/>
            <Container className="mt-5 my-5 loading">
              <h3 className="text-left">Loading...</h3>
            </Container>
          <Footer/>
        </>  
      );
    } else if(isLoaded){
        return(
            <>
            <Header history={this.props.history}/>
            
                <div className="container my-4">
                  {
                    this.state.param.type?
                    <h1 className="h2 text-center">Blogs related to "{this.props.match.params.type}"</h1>
                    :<h1 className="h2 text-center">My Cures</h1>
                  }
                    <div className="row" id="posts-container">
                      
                    {items.map((i) => (
                      
                      
                         parseInt(this.state.acPerm[0]) === parseInt(i.published_by)?
                                // Selects articles with publish status = 3 (Published)
                        <ListArticle
                            id = {i.article_id}
                            title = {i.title}
                            f_title = {i.friendly_name}
                            w_title = {i.window_title}
                            country = {i.country_id}
                            type = {i.type}
                            pubstatus_id= {i.pubstatus_id}
                            PostArticlesContent={() => this.PostArticles()}
                        />
                        : null
                    ))}
                    </div>
                </div>
            <Footer/>
            </>
        );
    } else if(regionPostsLoaded){
      return(
        <>
            <Header history={this.props.history}/>
            
                <div className="container my-4">
                  {
                    this.state.param.type?
                    <h1 className="h2 text-center">Blogs related to "{this.state.param.type}"</h1>
                    :<h1 className="h2 text-center">All Blogs</h1>
                  }
                    <div className="row" id="posts-container">
                    {items.map((i) => (
                      parseInt(i.country_id) === parseInt(this.state.country) ?            // Selects articles according to country required
                        <ListArticle
                            id = {i.article_id}
                            title = {i.title}
                            // f_title = {i.friendly_name}
                            // w_title = {i.window_title}
                            // PostArticlesContent={() => this.PostArticles()}
                        />
                        : null
                    ))}
                    </div>
                </div>
            <Footer/>
            </>
      );
    }
}
}