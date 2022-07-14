import { SearchZonee, SearchForm, SearchInput, SearchButton } from './SearchZone.styles.js';


function SearchZone() {
	return (
		<SearchZonee>
			<SearchForm>
				<SearchInput placeholder="Type city here..." />
				<SearchButton>Search</SearchButton>
			</SearchForm>
		</SearchZonee>
	)
}

export default SearchZone;