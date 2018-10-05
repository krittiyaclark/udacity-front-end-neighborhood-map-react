import React, {Component} from "react";
import Header from "./Header";
import Search from "./Search";
import Listings from "./Listings";

// Panel Main Container - Wrapper for left side of app
class MainContainer extends Component {
    state = {
        isOpen: false
    };
    
    toggleMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const { venues, toggleInfoWindow, setSearchTerm, searchTerm } = this.props;
        return (
            <section className="options-panel">
                <section className="panel-header">
                    <Header isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} />
                </section>
                <section
                    className={`panel-body ${this.state.isOpen && "show-panel-body"}`}
                >
                    <Search setSearchTerm={setSearchTerm} />
                    <Listings
                        venues={venues}
                        toggleInfoWindow={toggleInfoWindow}
                        searchTerm={searchTerm}
                    />
                </section>
            </section>
        );
    }
}

export default MainContainer;