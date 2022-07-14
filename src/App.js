import barcelona from './img/madrid.jpg'

import { createGlobalStyle } from 'styled-components'
import { Container } from './components/Container.styles';
import { LeftPart, CityImg } from './components/LeftPart.styles';
import { RightPart, RightPartContainer, RightPartLine } from './components/RightPart.styles.js';

import SearchZone from './components/SearchZone/SearchZone.component'
import ShowDay from './components/ShowDay/ShowDay.component'
import ShowTemperature from './components/ShowTemperature/ShowTemperature.component'
import Header from './components/Header/Header.component'
import TimeL from './components/TimelineBlock/TimelineBlock.component'
import Highlights from './components/Highlights/Highlights.component'

const GlobalStyle = createGlobalStyle`
  	body {
		background: rgb(128,104,190);
		font-family: serif;
 	}
	body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
}
 `

function App() {
	return (
		<div className="App">
			<GlobalStyle />
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
		</div>
	);
}

export default App;
