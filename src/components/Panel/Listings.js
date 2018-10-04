import React from "react";

const Listings = ({ venues, toggleMarker }) => {
    return (
        <ul className="listings">
            {
                venues.map(venue => {
                    return <li key={venue.id} className="listings__item" onClick={() => toggleMarker(venue)} >{venue.name}</li>
                })
            }
        </ul>
    );
};
export default Listings;