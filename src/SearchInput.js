import React, { Component } from 'react'

export class SearchInput extends Component {

   state={entry:''}
   
   onFormSubmit = (event) =>{
       event.preventDefault()
       this.props.onSearchSubmit(this.state.entry)
   }
    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form' action="">
                    <div className='field'>
                        <div className='ui masssive icon input'>
                         <input type="text" placeholder="search..." onChange={(event)=> this.setState({entry:event.target.value})}
                         value={this.state.value}/>
                         <i className='search icon'></i>
                        </div>
                    </div>    
                </form>
            </div>
        )
    }
}

export default SearchInput;
