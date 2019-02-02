import  React, { Component } from 'react';
import API from '../../utils/API';
import SearchBar from './../SearchBar';
import cardBackground from './../../Images/cardBackground.png';
import StripeCheckout from './../StripeCheckout';
import './style.css';

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
          marginTop:``
        },
        cardHolder: {
            width:`80%`,
            height:`60%`,
            backgroundColor: `white`,
            margin: `auto`,
            marginTop: `5%`
        },
        card: {
          width:`200px`,
          height:`200px`,
          backgroundColor: 'black',
          display:`inline-block`,
          margin:`20px`,
          color:`white`,
          float: `left`,
          backgroundImage: `url(${ cardBackground })`,
          backgroundSize: `cover`
        }
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
createCards(styles){
  let children = [];
  this.state.searchedSamples.map(sample=>{
      children.push(
      <div style={styles.card}className='sampleCard' >
      <h1>{sample.name}</h1>
          <a href={sample.link} download={sample.name}>
          download
       </a>
       <StripeCheckout />
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
          <SearchBar updateTerm={(e)=>this.setSearchTerm(e)} handleSearch={()=>this.handleSearch()} />
          <div style={styles.links} >
            <button onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children}>kicks</button>
            <button onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children}>hats</button>
            <button onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children}>snares</button>
            <button onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children}>synths</button>
            <button onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children} name={'vocals'}>vocals</button>
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
          </div>
      )
    }
}

export default SearchPage;