import React from 'react';

//this is a controlled element::: 
//this means data is stored within the component
//not on the DOM level

class SearchBar extends React.Component
{
    state = { term: 'Search for any image...' }

    onFormSubmit = (e) =>
    {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render()
    {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term } onChange={
                        (e) => this.setState({term:e.target.value})
                        }/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;