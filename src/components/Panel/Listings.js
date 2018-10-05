import React from "react";

// Venue list in the side panel
const Listings = ({ venues, toggleInfoWindow, searchTerm }) => {
    return (
        <ul className="listings">
            {venues
                .filter(
                    venue =>
                        // Filter the list to only the venue names including the search term
                        venue.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
                )
                .map(venue => {
                    return (
                        <li
                            key={venue.id}
                            className="listings__item"
                            onClick={() => toggleInfoWindow(venue)}
                        >
                            {venue.name}
                        </li>
                    );
                })}
        </ul>
    );
};
export default Listings;