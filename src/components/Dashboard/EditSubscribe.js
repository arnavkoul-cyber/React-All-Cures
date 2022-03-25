import React, { Component } from 'react';
import Header from '../Header/Header';

import { Form } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Heart from"../../assets/img/heart.png";
import { Link } from 'react-router-dom'
import { backendHost } from '../../api-config';
import { userId } from '../UserId';

import axios from 'axios';

import '../../assets/healthcare/css/main.css';
import Input from '@material-ui/core/Input';
import { Select, MenuItem } from '@material-ui/core';
import Userprofile from '../Profile/Userprofile';


class LoginInfo extends Component {
    constructor(props) {
      super(props);
      this.childDiv = React.createRef()
      this.state = { 
        items: [],
        carouselItems: [],
        comment: [],
        isLoaded: false,
        ratingValue: '',
        rating:[],
        ratingVal:[],
        param : this.props.match.params,
        disease: '',
        regions: '',
        regionPostsLoaded: false,
        regionalPost: [],
        showMore: false,
        value:'',
        type: [],
        favourite: [],
        diseaseList:[],
        mobile:'',
        disease:[],
        cures:[],
        showAlert: false,
        loaded:false,
        alertMsg: '',
        showCuresCards: false
      };
    }



    postSubscribtion(mobile) {
        //  var mobileNumber = this.state.mobile.split('+')
        // var phoneNumber = this.state.value.split('+')[1]
        // var countryCodeLength = phoneNumber.length % 10
        // var countryCode = phoneNumber.slice(0, countryCodeLength)
        // var StringValue = phoneNumber.slice(countryCodeLength).replace(/,/g, '')
         
          
          axios.post(`${backendHost}/users/subscribe/${mobile}`, {
          "nl_subscription_disease_id":this.state.disease.join(','),
          "nl_sub_type": this.state.type.indexOf('1') === -1 ? 0: 1,
          "nl_subscription_cures_id":this.state.cures.join(','),
        //   "country_code": countryCode,
          })
            .then(res => {
             this.setState({
                afterSubmitLoad: false
             })
             if(res.data === 1){
                this.Alert('You have successfully subscribed to our Newsletter')
             }
             else {
                this.Alert('Some error occured! Please try again later.')
             }
            })
            .catch(err => {
             this.setState({
                afterSubmitLoad: false
             })
            //  this.Alert('Some error occured! Please try again later.')
             
       
          })
       
      }
       getProfile = () => {
        axios.get(`${backendHost}/profile/${userId}`)
        .then(res => {
            
            this.setState({
                mobile:res.data.mobile_number,
                loaded:true
            })
           
        })
        .catch(err => {return})
    }
      handleSelect = function(subs) {
        const flavors = [];
        for (let i=0; i<subs.length; i++) {
            flavors.push(subs[i].value);
        }
        this.setState({
          type:flavors
        })
        
    }

      getDisease = () => {
        axios.get(`${backendHost}/article/all/table/disease_condition`)
        .then(res => {
            this.setState({
              diseaseList:res.data
            })
           
        })
        .catch(err => null)
    }




    componentDidMount() {
        window.scrollTo(0, 0);
      
        this.getProfile()
        this.getDisease()
      }

      render() { 
        return (
            <>
              <Header/>
             <div className="container">
                <div className="h2 text-center my-3">Edit Subscribe</div>
        <div className="card mb-5">

        <div className="row">
                  
                  <div className="col-lg-6 form-group">
                                <label htmlFor="">Type</label>
                                <select 
                    multiple
               
                    name="type" placeholder="Type" 
                    value={this.state.type} 
                    
                    onChange={(e)=> {
                       this.handleSelect(e.target.selectedOptions)
                    }}
                    required className="form-control">
                        <option value="1">All</option>
                        <option value="2">Disease</option>
                        <option value="3">Cures</option>
                    </select>
                    {   
                    this.state.type?
                    this.state.type.indexOf('2') === -1 
                    ? null 
                    :                             <div className="col-lg-6 form-group">
                    <label htmlFor="">Disease</label>
                        <Select multiple
                        value={this.state.disease}
                        onChange={(e) =>  this.setState({
                          disease:e.target.value
                        })
                          }
                        input={<Input id="select-multiple-chip" />}
                        className="form-control">
                        {this.state.diseaseList.map((lan) => {
                            return (
                                <MenuItem key={lan[0].toString()} value={lan[0]} >
                                    {lan[1]}
                                </MenuItem>
                            )
                        })}
                        </Select>
                </div>
                    : null
                } 


{   
                    this.state.type?
                   this.state.type.indexOf('3') === -1 
                    ? null 
                    :  <div className="col-lg-6 form-group">
                    <label htmlFor="">Cure</label>
                        <Select multiple
                        value={this.state.cures}
                        onChange={(e) =>  this.setState({
                          cures:e.target.value
                        })}
                        input={<Input id="select-multiple-chip" />}
                        className="form-control">
                        {this.state.diseaseList.map((lan) => {

                            return (
                                <MenuItem key={lan[0].toString()} value={lan[0]} >
                                    {lan[1]}
                                </MenuItem>
                            )
                        })}
                        </Select>
                </div>
                    : null
                }
                            </div>
                            </div>
                            <Form.Group className="col-lg-6  " style={{zIndex: 1}}>
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control   onChange={(newValue) => {
                              this.setState({
                                value: newValue
                              })
                            }} value={this.state.mobile} inputmode="numeric" type="number" name="" required/>
                            </Form.Group>
                            <div>
            <button className="bcolor rounded py-2" onClick={( ) => {this.postSubscribtion(this.state.mobile)}}>
                                   Submit
                                </button>
                                </div>

                                
            </div>
           
            </div>
            <Footer/>
   
              



</>
        );


      }
}

export default LoginInfo;