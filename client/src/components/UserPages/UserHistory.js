import React, { Component } from 'react';
import Footer from './../Footer';
import './style.css';


class UserHistory extends Component {

    returnTemplate(samples){
        return (
            <div>
            <div className='cardHolderHeader'>
        <h1>{this.props.samples.name}'s ample collection</h1>
            </div>
            <div>
            <div className='userSampleCardHolder'>
        <div className='samplesCol kicksCol'>
        <h2 className='collectionTypes'>Kicks</h2>
       {samples.map(sample=>{
           if(sample.type == 'kicks'){
               return <h3>{sample.name}</h3>
           }
       })}
       </div>
       <div className='samplesCol snaresCol'>
       <h2 className='collectionTypes'>Snares</h2>
       {samples.map(sample=>{
           if(sample.type == 'snares'){
               return <h3>{sample.name}</h3>
           }
       })}
       </div>
       <div className='samplesCol hatsCol'>
       <h2 className='collectionTypes'>Hats</h2>
       {samples.map(sample=>{
           if(sample.type == 'hats'){
               return <h3>{sample.name}</h3>
           }
       })}
       </div>
       <div className='samplesCol synthsCol'>
       <h2 className='collectionTypes'>Synths</h2>
       {samples.map(sample=>{
           if(sample.type == 'synths'){
               return <h3>{sample.name}</h3>
           }
       })}
       </div>
       <div className='samplesCol vocalsCol'>
       <h2 className='collectionTypes'>Vocals</h2>
       {samples.map(sample=>{
           if(sample.type == 'vocals'){
               return <h3>{sample.name}</h3>
           }
       })}
       </div>
    <a href='/search' id='searchLink2' style={{ textDecoration: `none`, color: `white`, position: 'realtive', top:'-30'}}>collect samples</a>
       </div>
    </div>
    </div>
    )

    }

    returnSingleTemplate(samples){
        return (
            <div>
            <div className='cardHolderHeader'>
        <h1>{this.props.samples.name}'s ample collection</h1>
            </div>
            <div>
            <div className='userSampleCardHolder'>
        <div className='samplesCol kicksCol'>
        <h2 className='collectionTypes'>Kicks</h2>
       
        { (Object.values(samples)[1] == 'kicks') ? (
            <h3>{Object.values(samples)[0]}</h3>) : (
                <div />)
            }
       </div>
       <div className='samplesCol snaresCol'>
       <h2 className='collectionTypes'>Snares</h2>
       
       { (Object.values(samples)[1] == 'snares') ? (
            <h3>{Object.values(samples)[0]}</h3>) : (
                <div />)
            }
           
       </div>
       <div className='samplesCol hatsCol'>
       <h2 className='collectionTypes'>Hats</h2>
       
       { (Object.values(samples)[1] == 'hats') ? (
            <h3>{Object.values(samples)[0]}</h3>) : (
                <div />)
            }

       </div>
       <div className='samplesCol synthsCol'>
       <h2 className='collectionTypes'>Synths</h2>
       
       { (Object.values(samples)[1] == 'synths') ? (
            <h3>{Object.values(samples)[0]}</h3>) : (
                <div />)
            }

       </div>
       <div className='samplesCol vocalsCol'>
       <h2 className='collectionTypes'>Vocals</h2>
       
       { (Object.values(samples)[1] == 'vocals') ? (
            <h3>{Object.values(samples)[0]}</h3>) : (
                <div />)
            }

       </div>
    <a href='/search' id='searchLink2' style={{ textDecoration: `none`, color: `white`, position: 'realtive', top:'-30'}}>collect samples</a>
       </div>
    </div>
    </div>)
    }

    returnEmptyTemplate(){
        return (
            <div className='userSampleCardHolder'>
            <h1>you have no samples</h1>
            <a href='/search' id='searchLink2' style={{ textDecoration: `none`, color: `white` }}>collect samples</a>
            </div>
        )
    }
    
    checkForSamples(samples){
        if(!samples.samples){
         return this.returnEmptyTemplate()
        } else if(Object.keys(samples.samples)[0]=='name'){ return this.returnSingleTemplate(samples.samples)} else{
              return this.returnTemplate(samples.samples)  
        } 
        
    }
    render() {
        return (
            <div className='userHistoryPage'>
                        {this.checkForSamples(this.props.samples)}
                <div className='foot'>
                 <Footer />
                 </div>
            </div>
        );
    }
}

export default UserHistory;
