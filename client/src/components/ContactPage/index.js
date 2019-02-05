import React, { Component } from 'react';
import './style.css'
import Footer from './../Footer';

class Contact extends Component {
    render() {
        return (
            <div>
            <div className='policyWrapper'style={{wdith:`900px`,backgroundColor:`lightgrey`}}>
            <div className='policyContent'style={{width:`80%`,margin:`auto`,backgroundColor:`white`}}>
              <h1>contact</h1>
               <h3>for all inquiries contact Albert Gonzalez at amaples@gmail.com</h3>
              
               </div>
               </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;
