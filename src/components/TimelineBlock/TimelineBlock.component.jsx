import { Timeline, Week, TimelineBlocks } from './TimelineBlock.styles.js';
import clouds from '../../img/clouds.png'
import sunclouds from '../../img/1530391_weather_clouds_sun_sunny_icon.png'
import sun from '../../img/2682848_day_forecast_sun_sunny_weather_icon.png'
import night from '../../img/5896937_cloud_moon_rain_sun_weather_icon.png'

import OneTimelineBlock from '../OneTimelineBlock/OneTimelineBlock.component.jsx';

function TimeL() {
	return (
		<section>
			<Timeline>Timeline <Week>Week</Week></Timeline>
			<TimelineBlocks>
				<OneTimelineBlock img={clouds} temp={'23°'} time={'09:00'} />
				<OneTimelineBlock img={sunclouds} temp={'28°'} time={'09:00'} />
				<OneTimelineBlock img={sun} temp={'32°'} time={'09:00'} />
				<OneTimelineBlock img={sun} temp={'33°'} time={'09:00'} />
				<OneTimelineBlock img={night} temp={'30°'} time={'09:00'} />
			</TimelineBlocks>
		</section>
	)
}

export default TimeL;