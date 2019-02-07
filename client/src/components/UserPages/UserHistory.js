import React, { Component } from 'react';
import Footer from './../Footer';
import './style.css';

class UserHistory extends Component {
    checkForSamples(samples){
        if(samples)
        return (
            <div>
            <div className='cardHolderHeader'>
        <h1>{this.props.samples.name}'s ample collection</h1>
            </div>
            <div className='userSampleCardHolder'>
        <div className='samplesCol kicksCol'>
        <h2 className='collectionTypes'>Kicks</h2>
       {this.props.samples.samples.map(sample=>{
           if(sample.type == 'kick'){
               return <h3>{sample.name}</h3>
           }
       })}
       </div>
       <div className='samplesCol snaresCol'>
       <h2 className='collectionTypes'>Snares</h2>
       {this.props.samples.samples.map(sample=>{
           if(sample.type == 'snare'){
               return <h3>{sample.name}</h3>
           }
       })}
       </div>
       <div className='samplesCol hatsCol'>
       <h2 className='collectionTypes'>Hats</h2>
       {this.props.samples.samples.map(sample=>{
           if(sample.type == 'hat'){
               return <h3>{sample.name}</h3>
           }
       })}
       </div>
       <div className='samplesCol synthsCol'>
       <h2 className='collectionTypes'>Synths</h2>
       {this.props.samples.samples.map(sample=>{
           if(sample.type == 'synth'){
               return <h3>{sample.name}</h3>
           }
       })}
       </div>
       <div className='samplesCol vocalsCol'>
       <h2 className='collectionTypes'>Vocals</h2>
       {this.props.samples.samples.map(sample=>{
           if(sample.type == 'vocal'){
               return <h3>{sample.name}</h3>
           }
       })}
       </div>
    </div>
    <a href='/search' id='searchLink' style={{ textDecoration: `none`, color: `white`, position: 'realtive', top:'-30'}}>collect samples</a>
    </div>
    )
    else{
        return (
            <div className='userSampleCardHolder'>
            <h1>you have no samples</h1>
            <a href='/search' id='searchLink1' style={{ textDecoration: `none`, color: `white` }}>collect samples</a>
            </div>
        )
    }
    }
    render() {
        return (
            <div className='userHistoryPage'>
                    {this.checkForSamples(this.props.samples.samples)}
                    
                <div className='foot'>
                 <Footer />
                 </div>
            </div>
        );
    }
}

export default UserHistory;
