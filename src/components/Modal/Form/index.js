import React from 'react';
import LoginForm from '../loginForm'
export const Form = ({ onSubmit }) => {
  return (
    // <form onSubmit={onSubmit}>
    //   <div className="form-group">
    //     <label htmlFor="name">Name</label>
    //     <input className="form-control" id="name" />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="email">Email address</label>
    //     <input
    //       type="email"
    //       className="form-control"
    //       id="email"
    //       placeholder="name@example.com"
    //     />
    //   </div>
    //   <div className="form-group"> 
    //     <button className="form-control btn btn-primary" type="submit">
    //       Submit
    //     </button>
    //   </div>
    // </form>
    <LoginForm/>
  );
};
export default Form;
