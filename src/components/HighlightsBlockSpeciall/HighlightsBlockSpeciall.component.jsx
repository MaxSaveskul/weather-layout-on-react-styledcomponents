import { HighlightsText, HighlightsBlockSpecial, HighlightsBlockSpecialFirst, HighlightsBlockSpecialSecond, SpecialIcon, SpecialHighlightsText } from './HighlightsBlockSpeciall.styles.js'

function HighlightsBlockSpeciall({ img1, text1, img2, text2 }) {
	return (
		<HighlightsBlockSpecial>
			<HighlightsBlockSpecialFirst>
				<SpecialIcon src={img1}></SpecialIcon>
				<HighlightsText>{text1}</HighlightsText>
			</HighlightsBlockSpecialFirst>
			<HighlightsBlockSpecialSecond>
				<SpecialIcon src={img2}></SpecialIcon>
				<SpecialHighlightsText>{text2}</SpecialHighlightsText>
			</HighlightsBlockSpecialSecond>
		</HighlightsBlockSpecial>
	)
}

export default HighlightsBlockSpeciall