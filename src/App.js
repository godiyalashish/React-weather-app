import React, { Component } from 'react';
import Weather from './Components/Weather/Weather';
import geolocation  from 'geolocation';
import Navigation from './Components/Navigation/Navigation';
import Icon from './Components/Icon/Icon';

let lat = "";
let long = "";

geolocation.getCurrentPosition(function (err, position) {
   		if (err) throw err
   		lat=position.coords.latitude;
   		long=position.coords.longitude;
		})



class App extends Component {
	
constructor(){
		super();
		this.state = {
				city:'',
				country:'',
				description:'',
				weather:'',
				temperature:'',
			  unit:'°C',
		};
	}

	componentDidMount = () => {
	
	setTimeout(function() { //Start the timer
     
		 fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`)
      .then(response => response.json())
      .then(data => {this.setState({
      			city:data.name,
    				country:data.sys.country,
    				description:data.weather[0].description,
    				weather:data.weather[0].main,
    				temperature:data.main.temp,
            unit:'°C',
      })
    }
      	);


  }.bind(this), 6000)	 
			}

 convertToFah = (event) => {
   if( this.state.unit === '°C') {
   const fah = (this.state.temperature * 9/5) + 32;
   this.setState({unit:'°F',
    temperature:fah,
   		})
  }

}

convertToCelcius = () => {

  if(this.state.unit === '°F'){
    const celcius = (this.state.temperature - 32)* 5/9
    this.setState({
      unit:'°C',
      temperature:celcius,
    })
  }
}


  render() {
   

    return (

    	<div>
    		<Navigation />
    		 { this.state.country&&
              <div>
               <Weather convertToCelcius={this.convertToCelcius} convertToFah = {this.convertToFah} weather={this.state} unit = {this.state.unit}/>
               <Icon weather={this.state.weather}/>
              </div>
            }
	    	
       </div>
    	
    );
  }
}

export default App
