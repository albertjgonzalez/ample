import React, { Component } from 'react';
import SearchIcon from './../../Images/searchIcon.png';

class SearchBar extends Component {
    state = {
        searchTerm: ''
    }
    handleChange(e,props){
        console.log(e.target.value)
        this.setState({searchTerm:e.target.value})
        props.updateTerm(e)
    }
    render() {
        const styles = {
            bar: {
                width: `250px`,
                height: `30px`,
                backgroundColor: `Black`,
                color:`white`,
                fontSize: `18px`,
                paddingLeft: `10px`,
                border: `none`,
                borderRadius:`5%`,
                margin: `none`
            },
            icon: {
                width:`32px`,
                position: `relative`,
                top:`10px`,
                marginLeft:`5px`
            },
            searchWrapper:{
                backgroundColor:`white`,
                margin:`auto`,
                marginBottom: `20px`,
                width:`325px`,
                height:'50px',
                padding:`3px 0px 3px 0px`,
                borderRadius:`2px`
            }
        }
        return (
            <div>
            <div style={styles.searchWrapper}>
                <input onChange={(e)=>this.handleChange(e,this.props)} style={styles.bar} name="" id="" class="btn btn-primary" type="text" placeholder='search samples' value={this.state.searchTerm} />
                <img src={SearchIcon} style={styles.icon} onClick={this.props.handleSearch}/>
            </div>
            </div>
        );
    }
}

export default SearchBar;
