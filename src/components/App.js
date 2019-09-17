import React from 'react';
import unsplash from './../api/unsplash';

import ImageList from './ImageList';
import SearchBar from './SearchBar';



//add gh-pages to deploy to github


class App extends React.Component 
{

    state = { images: [] };
    //use async + await to connect THEN retreive
    //data from 3rd party API
    // 1. add async in front of function
    // 2. add await before axios.get();
    // 3. store axios.get() as a constant

    // better to read than promises

    //if error occurs, convert or bind to arrow function
    onSearchSubmit = async(term) =>
    {
        //console.log(term);
        const response = await unsplash.get('/search/photos', {
            params: 
            {
                query: term
            }
        })

        //console.log(response.data.results);

        //once data is retrieved, store it as object in state

        this.setState({ images:response.data.results });

    }
    
    render(){
        return(
            <div className="ui container" style={{ marginTop:'10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
               
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;