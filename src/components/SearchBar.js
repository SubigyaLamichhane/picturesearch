import React from 'react';



var a;

class SearchBar extends React.Component {
    state = { term: '' }

    firstCharacterUpperCase = (e) => {
        
        if(e.target.value.length===1){
            this.setState({term: e.target.value.toUpperCase()});
        } else {
            this.setState({term: e.target.value});
        }
        
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        
        return(
            <div className="ui segment">
                <form onSubmit = {this.onFormSubmit} className = "ui form">
                    <div className = "field">
                        <label htmlFor = "name">Image Search</label>
                        <input id = "name" placeholder="Your Name" type="text" value = {this.state.term}
                        onChange = {this.firstCharacterUpperCase }/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;