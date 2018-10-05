import React from "react";

// Venue list in the side panel
const Listings = ({ venues, toggleInfoWindow, searchTerm }) => {
    if (venues.length === 0) {
        return (
            <ul className="listings">
                <li>No Listings Found</li>
            </ul>
        );
    } else {
        return (
            // Asked to add role by reviewer even though ul has an implicit role of list.
            <ul className="listings" role="list">
                {venues
                    .filter(
                        venue =>
                            // Filter the list to only the venue names including the search term
                            venue.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
                    )
                    .map(venue => {
                        return (
                            // Asked to add role by reviewer even though li has an implicit role of listitem.
                            <li
                                key={venue.id}
                                tabIndex={0}
                                role="listitem"
                                className="listings__item"
                                onClick={() => toggleInfoWindow(venue)}
                            >
                                {venue.name}
                            </li>
                        );
                    })}
            </ul>
        );
    }
};

export default Listings;