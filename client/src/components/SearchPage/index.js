import  React, { Component } from 'react';
import API from '../../utils/API';
import SearchBar from './../SearchBar'
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
            backgroundColor: `yellow`,
            margin: `auto`
        },
        card: {
          width:`200px`,
          height:`200px`,
          backgroundColor: 'black',
          display:`inline-block`,
          margin:`20px`,
          color:`white`
        }
      }
  }

setSearchTerm(e){
   this.setState({term:`'${e.target.value}'`})
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
          {sample.link}
        </div>
      )
  })
        
      return children  
}
handleClick(e){
  this.setState({term:e.target.text})
  this.setState({search:true})
  this.setState({header:this.state.term}) 
  this.searchSamples(this.state.term)
}
saveSample(){
  let sample = {

    name:`soft-kick`,
    type:'kick',
    link:'www.link.com'
  
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
            <a onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children}>kicks</a>  |  
            <a onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children}>hats</a>  |  
            <a onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children}>snares</a>  | 
            <a onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children}>synths</a>  | 
            <a onClick={(e)=>this.handleClick(e)} className='SearchLink' value={this.props.children}>vocals</a>
   
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