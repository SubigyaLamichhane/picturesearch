import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageList from './List'


class App extends React.Component {

    state = { images: [], image: null }

    onSearchSubmit = (term) =>{
        
        axios
        .get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID ZgKoBjO2inpRu-fJmmk-l87RFfJZLh_uDP4x9Lp-c98'
            }  
        })
        .then(response => {
            
            this.setState({ images: response.data.results});
            
        });
    }
    render(){
       return <div className = "ui container" style={{marginTop: '10px'}}>
           <SearchBar onSubmit={this.onSearchSubmit}/>
           Found {this.state.images.length}
           <ImageList images = {this.state.images}/>
       </div>;
    } 
}

export default App;
