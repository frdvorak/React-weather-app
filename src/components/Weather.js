import React from 'react';

const Weather = (props) => {
    return ( 
        <div>
        {props.city && props.country && <p>location: <span className='biggerText'>{props.city} {props.country}</span></p>}
        {props.temperature && <p>temperature: <span className='biggerText'>{props.temperature}</span></p>}
        {props.humidity && <p>humidity: <span className='biggerText'>{props.humidity}</span></p>}
        {props.conditions && <p>conditions: <span className='biggerText'>{props.conditions}</span></p>}
        {props.description && <p><span className='biggerText'>{props.description}</span></p>}
        {props.error && <p>{props.error}</p>}
        </div>
     );
}

export default Weather;