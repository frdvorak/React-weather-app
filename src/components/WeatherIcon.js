import React from 'react';

const WeatherIcon = (props) => {
        //console.log(props.description);
        let icon;
        if ((props.description === 'light rain')||(props.description === 'moderate rain')){
            icon = 'weather-rain';
        } else if  (props.description === 'heavy rain'){
            icon = 'weather-heavy-rain';
        } else if  (props.description === 'clear sky'){
            icon = 'weather-sun';
        } else if  ((props.description === 'few clouds')||(props.description === 'broken clouds')){
            icon = 'weather-sun-cloud';
        } else if  (props.description === 'overcast clouds'){
            icon = 'weather-clouds';
        } else if  (props.description === 'storm'){
            icon = 'weather-storm';
        } else if  (props.description === 'heavy storm'){
            icon = 'weather-heavy-storm';
        } else if  (props.description === 'fog'){
            icon = 'weather-fog';
        } else if  (props.description === 'snow'){
            icon = 'weather-snow';
        } else {
            icon = 'weather-sun-rain';
        }
        
        let path = './images/' + icon + '.svg';
        //console.log(path);
        return ( 
            <div>
                <img src={path} alt='weather-icon'/>
                
            </div>
         );
}

export default WeatherIcon;