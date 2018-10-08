import React from 'react';

const Weather = (props) => {
    return ( 
        <div>
        {props.city && props.country && <p>location: {props.city} {props.country}</p>}
        {props.temperature && <p>temperature: {props.temperature}</p>}
        {props.humidity && <p>humidity: {props.humidity}</p>}
        {props.conditions && <p>conditions: {props.conditions}</p>}
        {props.description && <p>description: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
        </div>
     );
}

export default Weather;