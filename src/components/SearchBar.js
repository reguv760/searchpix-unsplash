import React from 'react';

//this is a controlled element::: 
//this means data is stored within the component
//not on the DOM level

const defaultInputText = "Search for any image..."

class SearchBar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.searchBarInput = React.createRef();
    }


    state = { term: defaultInputText }

    onFormSubmit = (e) =>
    {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    onInputClick = (e) =>
    {
        e.preventDefault();
        
        if (this.state.term === defaultInputText)
        {               
            this.setState({ term: '' });            
        }
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
                        } onClick={this.onInputClick}/>
                
                        <button type="submit" style={{marginTop:"10px"}}>Submit</button>
                    
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;