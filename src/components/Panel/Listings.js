import React from "react";

const Listings = ({ venues, toggleInfoWindow, searchTerm }) => {
    return (
        <ul className="listings">
            {
                venues.filter(venue => venue.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0).map(venue => {
                    return <li key={venue.id} className="listings__item" onClick={() => toggleInfoWindow(venue)} >{venue.name}</li>
                })
            }
        </ul>
    );
};
export default Listings;