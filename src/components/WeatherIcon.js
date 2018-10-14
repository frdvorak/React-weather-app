import React from 'react';

const WeatherIcon = (props) => {
        console.log(props.description);
        let icon;
        if (props.description == 'light rain'){
            icon = 'weather-rain';
        } else if  (props.description == 'light rain'){
            icon = 'weather-sun-rain';
        } else if  (props.description == 'clear sky'){
            icon = 'weather-sun';
        } else if  ((props.description == 'few clouds')||(props.description == 'broken clouds')){
            icon = 'weather-sun-cloud';
        } else if  (props.description == 'overcast clouds'){
            icon = 'weather-clouds';
        } else {
            icon = 'weather-sun-rain';
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