import React from "react";

// Search feature - Searches only venue names
const Search = ({ setSearchTerm }) => {

    // OnChange set the search term in the App.js state
    function onChangeHandler(e) {
        setSearchTerm(e.target.value)
    }

    return (
        <section className="search-panel">
            <input type="text" onChange={e => onChangeHandler(e)} aria-labelledby="listingfilter"/>
            <p>Listings provided by FourSquare API</p>
        </section>    
    );
}

export default Search;