import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footerWrapper'>
                <div className='footerLinks'>
                <a href={'/'}>Terms of Use</a>
                <a href={'/privacyPolicy'}>Privacy Policy</a>
                <a href={'/contact'}>Contact</a>
                </div>
                <div className='footerInfo'>
                © 2019 ample.com All Rights Reserved
                </div>
                </div>
            </div>
        );
    }
}

export default Footer;
