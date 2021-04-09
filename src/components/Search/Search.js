import React, { Component } from 'react' ;
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
class Search extends Component {

    constructor(){
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        SearchService.getResponse().then((response) => {
            this.setState({ users: response.data })
        });
    }

    render() {
        console.log(users);
        return(
            <div>
                <Header/>
                <section class="physicians-tab">
  <div class="container">
    <div class="row">
      <div class="col-md-10 pd-0">
        <div class="tab-nav">
          <div class="comman-heading">
            <h2>All Physicians</h2>
          </div>
          {/* <!-- Nav tabs --> */}
          <ul class="nav">
            <li class="active"><a data-toggle="pill" href="#men">Men</a></li>
            <li><a data-toggle="pill" href="#women">Women</a></li>
            <li><a data-toggle="pill" href="#children">Children</a></li>
            <li><a data-toggle="pill" href="#date">16 Sep, 2020</a></li>
          </ul>
          <a href="javascriptvoid(0)" class="moreFilters color-white btn-bg">More Filters</a> </div>
        <div class="tab-content">
          <div id="men" class="tab-pane fade in active">
          <div class="tab-content-detail clearfix mr-20">
              <div class="dr-detail">
                <div class="tab-content-img">
                     <img src="" alt="special-1"/> 
                     </div>
                <div class="col-md-6 col-sm-12">
                  <div class="detail-l">
                    <div class="rating"> <span class="icon-star-1"></span>
                      <p>4.2</p>
                    </div>
                    <div class="name">
                      <h2>Dr. Jordan Reich, MD</h2>
                      <h3>General Physician</h3>
                      <h4>110 West 14th Street, New York, NY, 10011 (1.9mi)</h4>
                      <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales dolor in ante fermentum, vitae varius turpis imperdiet.”</p>
                    </div>
                    <div class="btn-group"> <a href="profile.html" class="btn-bg profile-btn color-white">Profile</a> <a href="javascript:void(0)" class="bg-gray video-btn color-light-gray">Video Consult</a> </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <div class="detail-r">
                    <ul class="mon coman-ul">
                      <p>Mon</p>
                      <li><a href="javascript:void(0)" class="active">9.00 am</a></li>
                      <li><a href="javascript:void(0)">10.00 am</a></li>
                      <li><a href="javascript:void(0)">1.00 pm</a></li>
                      <li><a href="javascript:void(0)">2.00 pm</a></li>
                    </ul>
                    <ul class="tue coman-ul">
                      <p>Tue</p>
                      <li><a href="javascript:void(0)">9.00 am</a></li>
                      <li><a href="javascript:void(0)">10.00 am</a></li>
                      <li><a href="javascript:void(0)">1.00 pm</a></li>
                      <li><a href="javascript:void(0)">2.00 pm</a></li>
                    </ul>
                    <ul class="wed coman-ul">
                      <p>Wed</p>
                      <li><a href="javascript:void(0)">9.00 am</a></li>
                      <li><a href="javascript:void(0)">10.00 am</a></li>
                      <li><a href="javascript:void(0)">1.00 pm</a></li>
                      <li><a href="javascript:void(0)">2.00 pm</a></li>
                    </ul>
                    <ul class="ted coman-ul">
                      <p>Thu</p>
                      <li><a href="javascript:void(0)">9.00 am</a></li>
                      <li><a href="javascript:void(0)">10.00 am</a></li>
                      <li><a href="javascript:void(0)">1.00 pm</a></li>
                      <li><a href="javascript:void(0)">2.00 pm</a></li>
                    </ul>
                    <ul class="fri coman-ul">
                      <p>Fri</p>
                      <li><a href="javascript:void(0)">9.00 am</a></li>
                      <li><a href="javascript:void(0)">10.00 am</a></li>
                      <li><a href="javascript:void(0)">1.00 pm</a></li>
                      <li><a href="javascript:void(0)">2.00 pm</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
                    
                {/* </div> */}
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            <Footer/>
            </div>
        );
    }
}
export default Search;
