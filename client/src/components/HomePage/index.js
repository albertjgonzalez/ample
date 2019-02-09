import React, { Component } from 'react';
import Background1 from './../../Images/backgroundimg1.jpg';
import Background2 from './../../Images/backgroundimg2.jpg';
import Footer from './../Footer'
import './style.css';


class HomePage extends Component {
    constructor(props){   // Optional, declare a class field to improve readability
        super(props)
        this.myRef=null    
    }

    
        scrollToMyRef = () => window.scrollTo({top:this.myRef.offsetTop, behavior: 'smooth'})
    

    render() {
        
        const styles = {
            main: {
                backgroundImage: `url(${Background1})`,
                backgroundSize: `cover`
            },
            moreinfo: {
                backgroundImage: `url(${Background2})`,
                backgroundSize: `cover`
            }
        }
        return (
            <div>
                <div id='HomeContent' style={styles.main}>

                    <div id='headingDiv'>
                        <p className='heading1'>all samples <br /> $1 or less </p>
                        <p className='heading2'>the worlds largest  <br /> online collection <br /> of audio samples </p>
                        <a href={('/register')} id='searchLink' style={{ textDecoration: `none`}}>start collection</a>
                    </div>

                    <div className='buttonWrapper'>
                    <button onClick={this.scrollToMyRef}id='infoButton' style={{margin:`auto`}}>
                    <p>more info</p>
                    <p style={{marginTop:'-20px'}}>↓</p>    
                    </button>
                    </div>

                    <div style={{height:'500px'}} id='gradient' />
                </div>
                <div ref={ (ref) => this.myRef=ref }id='MoreInfoContent' style={styles.moreinfo}>
                    <div className='infoPageText'>
                    <p className='infoHeading1'>find the perfect sample for <br /> your next project</p>
                    <p className='infoHeading2'>create your own custom <br /> drum kits</p>
                    <p className='infoHeading3'>take your music to <br />the next level</p>
                    </div>
                <div id='gradient2' />
                <div style={{position:'relative', bottom:'0'}}>
                <Footer />
                </div>
                </div>
            </div>
        )
    }
}

export default HomePage;