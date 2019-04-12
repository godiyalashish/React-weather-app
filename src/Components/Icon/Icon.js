import React from 'react';
import './Icon.css';


class Icon extends React.Component {

		

	render(){

			if(this.props.weather.toLowerCase() === 'drizzle'){

				return(

					<div className="icon sun-shower">
                       <div className="cloud"></div>
  						<div className="sun">
    					<div className="rays"></div>
  						</div>
  						<div className="rain"></div>
					</div>
					);
			}
			if(this.props.weather.toLowerCase() === 'clouds'){

				return(
					<div className="icon cloudy">
					  <div className="cloud"></div>
					  <div className="cloud"></div>
					</div>
					);
			}

			if(this.props.weather.toLowerCase() === 'rain'){
				return(
					<div className="icon rainy">
					  <div className="cloud"></div>
					  <div className="rain"></div>
					</div>
					);
			}
			
			if(this.props.weather.toLowerCase() === 'snow'){
				return(

					<div className="icon flurries">
					  <div className="cloud"></div>
					  <div className="snow">
					    <div className="flake"></div>
					    <div className="flake"></div>
					  </div>
					</div>
					);
			}

			if(this.props.weather.toLowerCase() === 'clear'){

				return(
					<div className="icon sunny">
					  <div className="sun">
					    <div className="rays"></div>
					  </div>
					</div>
					);
			}	

		    if(this.props.weather.toLowerCase() === 'thunderstom'){

		    	return(
		    		<div className="icon thunder-storm">
					  <div className="cloud"></div>
					  <div className="lightning">
					    <div className="bolt"></div>
					    <div className="bolt"></div>
					  </div>
					</div>);
		    }	

			else{
				return(<div className="icon cloudy">
					  <div className="cloud"></div>
					  <div className="cloud"></div>
					</div>
					);
			}


			

	}
}

export default Icon