import React from 'react';
import { Link } from 'react-router-dom';

const AllPost = ({id, title, f_title, w_title}) => {
    console.log('id: ', id)
        return (
            <>
            <div >
                <div  >
                    {/* <div className="card-body"> */}
                        
                            <div className="d-flex justify-content-between align-items-center">
                            <div>
                            <Link to={ `/blog/${id}` }  className="d-flex justify-content-between align-items-center">
                                <div className="card-title h4 m-0 p-0">{title}</div>
                            </Link>
                            </div>
                            
                            </div>
                        
                        <div className="card-info">
                            <h4>{w_title}</h4>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        
            </>
        )    

}
export default AllPost;