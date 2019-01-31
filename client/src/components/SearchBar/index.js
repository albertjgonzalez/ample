import React, { Component } from 'react';
import SearchIcon from './../../Images/searchIcon.png';

class SearchBar extends Component {
    state = {
        searchTerm: 'search samples'
    }
    handleChange(e,props){
        this.setState({searchTerm:e.target.value})
        props.updateTerm(e)
    }
    render() {
        const styles = {
            bar: {
                width: `250px`,
                height: `30px`,
                border: `solid 5px white`,
                backgroundColor: `Black`,
                color:`white`,
                marginTop:`100px`,
                fontSize: `18px`,
                paddingLeft: `1%`,
                marginBottom:`2%`
            },
            icon: {
                width:`42px`,
                position: `relative`,
                top: `14px`
            }
        }
        return (
            <div>
                <input onChange={(e)=>this.handleChange(e,this.props)} style={styles.bar} name="" id="" class="btn btn-primary" type="text" value={this.state.searchTerm} />
                <img src={SearchIcon} style={styles.icon} />
            </div>
        );
    }
}

export default SearchBar;
