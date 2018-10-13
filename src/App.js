import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import CityTile from './components/CityTile';

const API_KEY = '4f6f72308473314b6727d9fb36b07e22';

class App extends Component {
  state = {
    city: 'London',
    temperature: undefined,
    country: 'UK',
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // show current data for default city (London)
  componentDidMount = async () => {
    console.log('aaa');
    const city = this.state.city;
    const country = this.state.country;
    // call api, convert it to JSON, save that in variable 'data'
    const api_call = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
      if (city && country && data.name) { //data.name is incuded so we setState only when we find city in the database
        console.log(data);
        this.setState({
          city: data.name,
          temperature: data.main.temp,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the city and country"
        })
      }
  };

  // handle when the user clicks on one of the premade city tiles
  tileClick = async (mesto, zeme) => {
    console.log(mesto);
    const city = mesto;
    const country = zeme;
    // call api, convert it to JSON, save that in variable 'data'
    const api_call = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    //console.log(data.name)
   
      if (city && country && data.name) { //data.name is incuded so we setState only when we find city in the database
        console.log(data);
        this.setState({
          city: data.name,
          temperature: data.main.temp,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the city and country"
        })
      }
  }
  
  // handle when the user inputs data in the form
  getWeather = async (e)=> {
    e.preventDefault(e);
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // call api, convert it to JSON, save that in variable 'data'
    const api_call = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    //console.log(data.name)
   
      if (city && country && data.name) { //data.name is incuded so we setState only when we find city in the database
        console.log(data);
        this.setState({
          city: data.name,
          temperature: data.main.temp,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the city and country"
        })

      }
    
  }
 
  render() {
    return (
      <div className="App">
        <div class="header">
          <div className="section-one">
            <Titles />
          </div>
          <div className="section-two">
          <Weather 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
          </div>
        </div>
        <div className="form-section">
            <Form getWeather={this.getWeather}/>
          </div>
        <div className='cities-panel container row align-items-center justify-content-center'>
          <CityTile name={'Paris'} city={'paris'} country={'fr'} imageFile={'paris'} tileClick={this.tileClick}/>
          <CityTile name={'New York'} city={'new york'} country={'us'} imageFile={'newyork'} tileClick={this.tileClick}/>
          <CityTile name={'Berlin'} city={'berlin'} country={'de'} imageFile={'berlin'} tileClick={this.tileClick}/>
          <CityTile name={'Warsaw'} city={'warsaw'} country={'poland'} imageFile={'warsaw'} tileClick={this.tileClick}/>
          <CityTile name={'Barcelona'} city={'barcelona'} country={'es'} imageFile={'barcelona'} tileClick={this.tileClick}/>
          <CityTile name={'Florence'} city={'florence'} country={'it'} imageFile={'florence'} tileClick={this.tileClick}/>
          <CityTile name={'Tokyo'} city={'tokyo'} country={'jp'} imageFile={'tokyo'} tileClick={this.tileClick}/>
          <CityTile name={'Hong Kong'} city={'hong kong'} country={'cn'} imageFile={'hongkong'} tileClick={this.tileClick}/>
          <CityTile name={'Kiev'} city={'kiev'} country={'ua'} imageFile={'kiev'} tileClick={this.tileClick}/>
          <CityTile name={'Prague'} city={'prague'} country={'cz'} imageFile={'prague'} tileClick={this.tileClick}/>
          <CityTile name={'Vienna'} city={'vienna'} country={'at'} imageFile={'vienna'} tileClick={this.tileClick}/>
          <CityTile name={'Madrid'} city={'madrid'} country={'es'} imageFile={'madrid'} tileClick={this.tileClick}/>
          <CityTile name={'Venice'} city={'venice'} country={'it'} imageFile={'venice'} tileClick={this.tileClick}/>
          <CityTile name={'Washington'} city={'washington'} country={'us'} imageFile={'washington'} tileClick={this.tileClick}/>
          <CityTile name={'Amsterdam'} city={'amsterdam'} country={'nl'} imageFile={'amsterdam'} tileClick={this.tileClick}/>
        </div>
      </div>
    );
  }
}

export default App;
