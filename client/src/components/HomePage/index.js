import  React, { Component } from 'react';
import Background1 from './../../Images/backgroundimg1.jpg';
import Background2 from './../../Images/backgroundimg2.jpg';
import './style.css';


class HomePage extends Component {
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
        <p className='heading1'>all samples <br /> $1 or less </p>
        <p className='heading2'>the worlds largest  <br /> online collection <br /> of music samples </p>
        <button id='searchButton' ><a style={{textDecoration:`none`,color:`white`}} href='/search'>search samples</a></button>
        <button id='infoButton' >more info</button>
          </div>
          <div id='gradient'/>
          <div id='MoreInfoContent' style={styles.moreinfo}>
          </div>
          <div id='gradient2'/>
          </div>
      )
    }
}

export default HomePage;