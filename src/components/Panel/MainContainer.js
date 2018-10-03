import React from "react";
import Header from "./Header";
import Search from "./Search";
import Listings from "./Listings";

// Panel Main Container - Wrapper for left side of app
const MainContainer = () => {
    return (
        <section className="options-panel">
            <section className="panel-header">
                <Header />
            </section>
            <section className="panel-body">
                <Search />
                <Listings />
            </section>
        </section>
    );
};
export default MainContainer;