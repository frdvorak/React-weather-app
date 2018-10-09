import React from 'react';

const CityTile = (props) => {
       
        return ( 
            <span className="cityTile col-xs-12 col-sm-6 col-md-4 col-lg-2 col-xl-1">
                <span className="inner" onClick={() => props.tileClick(props.city, props.country)} style={{backgroundImage: `url(images/${props.name}.svg)`}}>
                    <h5>{props.name}</h5>
                </span>
            </span>
         );
}

 
export default CityTile;