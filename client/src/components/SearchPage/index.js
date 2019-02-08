import  React, { Component } from 'react';
import API from '../../utils/API';
import SearchBar from './../SearchBar';
import axios from 'axios'
import cardBackground from './../../Images/cardBackground.png';
import Checkout from './../Checkout';
import { Media, Player, controls } from 'react-media-player'
import Footer from './../Footer'
import './style.css';

const { PlayPause, MuteUnmute } = controls

class SearchPage extends Component {

  

    state = {
      searchedSamples: [],
      search: false,
      header:'',
      term: 'search samples',
      styles: {
        main: {
            backgroundSize: `cover`
        },
        links: {
          display: `inline`,
          width: `100%`,
          marginTop:`10%`
        },
        cardHolder: {
            width:`80%`,
            height:`60%`,
            backgroundColor: `white`,
            borderRadius:`1%`,
            margin: `auto`,
            marginTop: `20px`,
            marginBottom:`5%`,
            padding:`50px 75px 50px 75px`
        },
        card: {
          width:`200px`,
          height:`200px`,
          borderRadius:`50%`,
          backgroundColor: 'lightgrey',
          display:`inline-block`,
          margin:`20px`,
          color:`#DA1C5C`,
          float: `left`,
          backgroundImage: `url(${ cardBackground })`,
          backgroundSize: `cover`,
          fontSize: `24px`,
          textShadow: `1px 1px black`
        },
        SearchDiv: {
          paddingTop:`75px`
        },
        playButton: {
          marginTop:`-25px`,
          marginBottom:`-5px`,
        height:`90px`,
        width:`200px`,
        opacity:`0`,
        color:`white`,
        fontSize:`24px`,
        border:`none`,
        borderRadius:'20%'}
      }
  }

  

setSearchTerm(e){
   this.setState({term:`${e.target.value}`})
}
handleSearch(){
  this.setState({search:true})
  this.setState({header:this.state.term})
  this.searchSamples(this.state.term)
}

addNewSample(sample){
  const savedSamples = [];
  const newSample = {name:sample.name, type:sample.type}
  savedSamples.push(newSample)
  const { email,name,samples } = JSON.parse(localStorage.getItem('user'));
        if (samples != null){
          samples.map(sample=>savedSamples.push(sample))
          console.log({savedSamples})
          var userPublicData = {
            name: name,
            email: email,
        samples: savedSamples,
      }
        } else {
          console.log(savedSamples)
          var userPublicData = {
            name: name,
            email: email,
        samples: savedSamples,
      }
        }
      
  axios.post('api/users/updateUser',userPublicData)
  .then(res=>{
    console.log(res)
    localStorage.setItem('user', JSON.stringify(userPublicData))
  })
  window.location.href = sample.link;
}

createCards(styles){
  var AudioPlayer = require('react-responsive-audio-player');
  let children = [];
  this.state.searchedSamples.map(sample=>{
      children.push(
      <div style={styles.card}className='sampleCard' >
      <p style={{marginTop:`34px`}}>{sample.name}</p>

      <Media>
        <div className="media">
          <div className="media-player">
            <Player src={sample.link} />
          </div>
          <div  className="media-controls">
            <PlayPause style={styles.playButton} />
          </div>
        </div>
      </Media>
      <Checkout handleSend={()=>this.addNewSample(sample)} name={sample.name} paid={this.props.paid}/>
          {/* <div>
          <a style={{color:`white`,textDecoration:`none`,fontSize:`22px`}} href={sample.link} download={sample.name}>
          download
       </a>
       </div> */}
       
        </div>
      )
  })
        
      return children  
}
handleClick(e){
  this.setState({term:e.target.innerHTML})
  this.setState({search:true})
  this.setState({header:this.state.term}) 
  this.searchSamples(this.state.term)
}
saveSample(){
  let sample = {

    name:`DBZ-vocal`,
    type:'vocals',
    link:'https://s3.us-east-2.amazonaws.com/amplesample/vocals/DBZ-vocal.wav'
  
    }
    API.saveSample(sample)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
}
searchSamples(type){
API.getsample(type)
.then(res=>this.setState({searchedSamples:res.data}))
.catch(err=>console.log(err))
}

  render() {
    const styles = this.state.styles
      return (
        <div id='SearchContent'style={styles.main} >
        <div style={styles.SearchDiv}className='searchDiv'>
          <SearchBar style={styles.SearchBar} updateTerm={(e)=>this.setSearchTerm(e)} handleSearch={()=>this.handleSearch()} />
          <div style={styles.links} >
            <button onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children}>kicks</button>
            <button onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children}>hats</button>
            <button onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children}>snares</button>
            <button onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children}>synths</button>
            <button onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children} name={'vocals'}>vocals</button>
          </div>
          </div>
          {
            !this.state.search ?
            function(){return <h1>Hello</h1>} :
            function(){return <h1>{this.state.term}</h1>}
          }
          <div style={styles.cardHolder}> 
          {
            !this.state.search ?
            function(){return <h1>Hello</h1>} :
            this.createCards(styles)}
                </div>
                <Footer />
          </div>
      )
    }
}

export default SearchPage;