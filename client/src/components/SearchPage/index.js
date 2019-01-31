import  React, { Component } from 'react';
import Background1 from './../../Images/backgroundimg1.jpg'
import SearchBar from './../SearchBar'
import './style.css';

class SearchPage extends Component {

    state = {
      term: 'search samples'
  }

setSearchTerm(e){
   this.setState({term:e.target.value})
}
  render() {
    const styles = {
      main: {
          backgroundSize: `cover`
      },
      links: {
        display: `inline`,
        width: `100%`,
        marginTop:``
      }
    }
      return (
        <div id='SearchContent'style={styles.main} >
          <SearchBar updateTerm={(e)=>this.setSearchTerm(e)}  />
          <div style={styles.links} >
            <a className='SearchLink' >kicks</a>  |  <a className='SearchLink' >hats</a>  |  <a className='SearchLink' >snares</a>  |  <a className='SearchLink' >synths</a>  |  <a className='SearchLink' >vocals</a>
          </div>
          <h1>{this.state.term}</h1>
          </div>
      )
    }
}

export default SearchPage;