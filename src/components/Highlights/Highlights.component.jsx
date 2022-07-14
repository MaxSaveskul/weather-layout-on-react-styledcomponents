import { Highlights, HighlightsBlocks } from './Highlights.styles.js'
import HighlightsBlockk from '../HighlightsBlock/HighlightsBlock.component'
import HighlightsBlockSpeciall from '../HighlightsBlockSpeciall/HighlightsBlockSpeciall.component.jsx'

import humidity from '../../img/2682839_drop_forecast_humidity_precipitation_rain_icon.png'
import sundown from '../../img/1530384_weather_evening_sun_sunset_icon.png'
import sunup from '../../img/1530387_weather_morning_sun_sunrise_icon.png'
import pressure from '../../img/2675979.png'
import сloudсoverage from '../../img/2998130_cloud_clouds_cloudy_network_weather_icon.png'
import windspeed from '../../img/6074696_cloud_ecology_energy_renewable_turbine_icon.png'
import fire from '../../img/7795620_weather_warm_termometer_hot_temperature_icon.png'
import cold from '../../img/7984990_weather_temperature_thermometer_cold_winter_icon.png'

function High() {
	return (
		<section>
			<Highlights>Today's highlights</Highlights>
			<HighlightsBlocks>
				<HighlightsBlockk text={'Humidity'} img={humidity} det={'31%'} />
				<HighlightsBlockk text={'Pressure'} img={pressure} det={'1020hPa'} />
				<HighlightsBlockSpeciall img1={cold} text1={'23°'} img2={fire} text2={'33°'} />
				<HighlightsBlockk text={'Cloud Coverage'} img={сloudсoverage} det={'31%'} />
				<HighlightsBlockk text={'Wind Speed'} img={windspeed} det={'2.56m/s'} />
				<HighlightsBlockSpeciall img1={sunup} text1={'6:58'} img2={sundown} text2={'21:43'} />
			</HighlightsBlocks>
		</section >
	)
}

export default High;