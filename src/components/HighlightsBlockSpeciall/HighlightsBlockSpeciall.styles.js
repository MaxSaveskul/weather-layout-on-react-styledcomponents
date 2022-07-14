import styled from "styled-components";

export const HighlightsText = styled.p`
	font-weight: 700;
    font-size: 18px;
    color: #4e5356;
	margin-top: 4px;
`

export const HighlightsIcon = styled.img`
	width: 60px;

`

export const SpecialHighlightsText = styled(HighlightsText)`
	color: white;
`

export const SpecialIcon = styled(HighlightsIcon)`
	margin-top: 15px;
`

export const HighlightsBlockSpecial = styled.div`
	width: 30%;
    height: 125px;
    background-color: #ffffff;
    border-radius: 10px;
    margin: 10px;
    text-align: center;
	display: flex;
    justify-content: space-evenly;
    padding-top: 0;
`

export const HighlightsBlockSpecialFirst = styled.div`
    width: 50%;
`

export const HighlightsBlockSpecialSecond = styled.div`
	width: 50%;
    border-radius: 0 20px 20px 0;
    color: white;
    background: rgb(128,104,190);
    background: linear-gradient(132deg, rgba(128,104,190,1) 0%, rgba(1,186,154,1) 100%);
`