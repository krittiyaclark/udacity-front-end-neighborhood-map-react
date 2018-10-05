import React, {Component} from "react";
import Header from "./Header";
import Search from "./Search";
import Listings from "./Listings";

// Panel Main Container - Wrapper for left side of app
class MainContainer extends Component {
    render() {
        const { venues, toggleInfoWindow, setSearchTerm, searchTerm } = this.props;
        return (
            <section className="options-panel">
            <section className="panel-header">
                <Header />
            </section>
            <section className="panel-body">
                <Search setSearchTerm={setSearchTerm}/>
                <Listings venues={venues} toggleInfoWindow={toggleInfoWindow} searchTerm={searchTerm} />
            </section>
        </section>
        );
    }
}

export default MainContainer;