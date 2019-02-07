import React, { Component } from 'react';
import Footer from './../Footer';
import './style.css';

class UserHistory extends Component {
    render() {
        return (
            <div className='userHistoryPage'>
                <div className='userSampleCardHolder'>
                    <h1>{this.props.samples.name}'s ample collection</h1>
                    <div className='row'>
                    <div className='col kicksCol'>
                    <h2>kicks</h2>
                   {this.props.samples.samples.map(sample=>{
                       if(sample.type == 'kick'){
                           return <h3>{sample.name}</h3>
                       }
                   })}
                   </div>
                   <div className='col snaresCol'>
                   <h2>snares</h2>
                   {this.props.samples.samples.map(sample=>{
                       if(sample.type == 'snare'){
                           return <h3>{sample.name}</h3>
                       }
                   })}
                   </div>
                   <div className='col hatsCol'>
                   <h2>hats</h2>
                   {this.props.samples.samples.map(sample=>{
                       if(sample.type == 'hat'){
                           return <h3>{sample.name}</h3>
                       }
                   })}
                   </div>
                   <div className='col synthsCol'>
                   <h2>hats</h2>
                   {this.props.samples.samples.map(sample=>{
                       if(sample.type == 'synth'){
                           return <h3>{sample.name}</h3>
                       }
                   })}
                   </div>
                   <div className='col vocalsCol'>
                   <h2>hats</h2>
                   {this.props.samples.samples.map(sample=>{
                       if(sample.type == 'vocal'){
                           return <h3>{sample.name}</h3>
                       }
                   })}
                   </div>
                </div>
                </div>
                <div className='foot'>
                 <Footer />
                 </div>
            </div>
        );
    }
}

export default UserHistory;
