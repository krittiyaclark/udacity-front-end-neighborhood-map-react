import React from "react";

const Search = ({ setSearchTerm }) => {
    function onChangeHandler(e) {
        setSearchTerm(e.target.value)
    }

    return (
        <section className="search-panel">
            <input type="text" onChange={e => onChangeHandler(e)} />
            <p>Listings provided by FourSquare API</p>
        </section>    
    );
}

export default Search;