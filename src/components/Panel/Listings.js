import React from "react";

const Listings = ({ venues, toggleInfoWindow }) => {
    return (
        <ul className="listings">
            {
                venues.map(venue => {
                    return <li key={venue.id} className="listings__item" onClick={() => toggleInfoWindow(venue)} >{venue.name}</li>
                })
            }
        </ul>
    );
};
export default Listings;