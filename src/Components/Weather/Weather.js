import React from 'react';
import './Weather.css'


class Weather extends React.Component{

    


	render(){


		return(

			<div className="weather">
                	<p>{this.props.weather.city},{this.props.weather.country}</p>
                	<p>{this.props.weather.temperature}<span>{this.props.unit}</span></p>
                	<center><button onClick={this.props.convertToCelcius} className="unit" tabIndex="1">°C</button><button onClick={this.props.convertToFah} className="unit" tabIndex="2">°F</button></center>
                	<p>{this.props.weather.description}</p>
       
			</div>


			);
	}
}

export default Weather