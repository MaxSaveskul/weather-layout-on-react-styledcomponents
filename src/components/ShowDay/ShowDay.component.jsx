import { ShowDayDiv, DayNameP, ForecastP, CloudsImg } from './ShowDay.styles.js'
import clouds from '../../img/clouds.png'

function ShowDay() {
	return (
		<ShowDayDiv>
			<DayNameP>Thursday</DayNameP>
			<ForecastP>"scattered clouds"</ForecastP>
			<CloudsImg src={clouds}></CloudsImg>
		</ShowDayDiv>
	)
}

export default ShowDay;