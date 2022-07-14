import { Headerr, MyCities, NavButton, } from './Header.styles.js';

function Header() {
	return (
		<Headerr>
			<MyCities>My Cities (1/5)</MyCities>
			<nav>
				<NavButton>Celsius</NavButton>
				<NavButton>Fahrenheit</NavButton>
				<NavButton>Translate</NavButton>
			</nav>
		</Headerr>
	)
}

export default Header;