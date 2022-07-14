import { HighlightsText, HighlightsIcon, HighlightDetails, HighlightsBlock } from "./HighlightsBlock.styles";

function HighlightsBlockk(props) {
	return (
		<HighlightsBlock>
			<HighlightsText>{props.text}</HighlightsText>
			<HighlightsIcon src={props.img}></HighlightsIcon>
			<HighlightDetails>{props.det}</HighlightDetails>
		</HighlightsBlock>
	)
}

export default HighlightsBlockk;