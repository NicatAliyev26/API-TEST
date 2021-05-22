import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css'
import SearchInput from './SearchInput'
import ImagesList  from './ImageList'



export class Index extends Component {

    state= { images:[]}

     onSearchSubmit = async (entry) => {
       const response = await axios.get(`https://pixabay.com/api/?key=21723523-68f9feb02335077abb61639f2&q=${entry}&image_type=photo`)
       this.setState({images:response.data.hits})
    }
    render() {
        return (
            <div className='ui container' style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImagesList images={this.state.images} />
            </div>
        )
    }
}

export default Index











ReactDOM.render( <Index/> ,
    document.querySelector('#root')
    )