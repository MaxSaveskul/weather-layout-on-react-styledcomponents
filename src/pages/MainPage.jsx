import barcelona from '../assets/madrid.jpg'

import { Container } from '../components/Container.styles';
import { LeftPart, CityImg } from '../components/LeftPart.styles';
import { RightPart, RightPartContainer, RightPartLine } from '../components/RightPart.styles.js';

import SearchZone from '../components/SearchZone/SearchZone.component'
import ShowDay from '../components/ShowDay/ShowDay.component'
import ShowTemperature from '../components/ShowTemperature/ShowTemperature.component'
import Header from '../components/Header/Header.component'
import TimeL from '../components/TimelineBlock/TimelineBlock.component'
import Highlights from '../components/Highlights/Highlights.component'

const MainPage = () => {
	return (
		<Container>
			<LeftPart>
				<SearchZone />
				<ShowDay />
				<ShowTemperature />
				<CityImg src={barcelona} />
			</LeftPart>
			<RightPart>
				<RightPartContainer>
					<Header />
					<RightPartLine />
					<TimeL />
					<Highlights />
				</RightPartContainer>
			</RightPart>
		</Container>
	)
}

export default MainPage;