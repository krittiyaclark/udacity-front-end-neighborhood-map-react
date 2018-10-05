import React from "react";

// Navigation Header
const Header = ({ toggleMenu, isOpen }) => {
    return (
        <React.Fragment>
            <h1 className="open-btn" onClick={() => toggleMenu()}>
                {isOpen ? "X" : "="}
            </h1>
            <h1>Neighborhood Map</h1>
            <h4>Place to eat in Amsterdam</h4>
        </React.Fragment>
    );
};
export default Header;