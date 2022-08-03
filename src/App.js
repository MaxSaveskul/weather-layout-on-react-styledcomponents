import { createGlobalStyle } from 'styled-components'

import MainPage from './pages/MainPage'

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
			<MainPage />
		</div>
	);
}

export default App;
