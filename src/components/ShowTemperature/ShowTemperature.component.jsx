import { ShowTemperatureDiv, BallDiv, CityNameDiv, PlusButton } from './ShowTemperature.styles.js';

function ShowTemperature() {
	return (
		<ShowTemperatureDiv>
			<BallDiv>23°</BallDiv>
			<CityNameDiv>Madrid (ES)</CityNameDiv>
			<PlusButton>+</PlusButton>
		</ShowTemperatureDiv>
	)
}
export default ShowTemperature;