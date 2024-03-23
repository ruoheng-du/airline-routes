import React from "react";

function Routes(props){
    const {projection, routes, selectedAirline} = props;
    // TODO: 
    // return the routes of the selected airline; 
    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.
    if (selectedAirline) {

        const selectedRoutes = routes.filter(routes => routes.AirlineID === selectedAirline);

        const routeLines = selectedRoutes.map((routes, index) => {
            const [sourceX, sourceY] = projection([routes.SourceLongitude, routes.SourceLatitude]);
            const [destX, destY] = projection([routes.DestLongitude, routes.DestLatitude]);
        
        return (
            <line
                key={index}
                x1={sourceX}
                y1={sourceY}
                x2={destX}
                y2={destY}
                stroke="#992a5b" 
                strokeWidth="0.1"
            />
        );
    });
        return <g>{routeLines}</g>
    } else{
        return <g></g>;
    }
}

export { Routes }