import React from 'react';

const WeatherIcon = (props) => {
        console.log(props.description);
        let icon;
        if (props.description == 'ligaht rain'){
            icon = 'weather-sun-rain';
            
        } else {
            icon = 'weather-sun';
        }
        
        let path = '../images/' + icon + '.svg';
        console.log(path);
        return ( 
            <div>
                <img src={path} alt='weather-icon'/>
                
            </div>
         );
}

 
export default WeatherIcon;