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
          </div>
          <div id='MoreInfoContent' style={styles.moreinfo}>
          </div>
          </div>
      )
    }
}

export default HomePage;