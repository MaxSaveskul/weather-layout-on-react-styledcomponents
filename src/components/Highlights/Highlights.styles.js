import styled from "styled-components";

export const Highlights = styled.h2`
	color: #7583a6;
    font-weight: 700;
    font-size: 40px;
    font-family: Sans-serif, serif;
    margin: 15px 0;
    background: rgb(128,104,190);
    background: linear-gradient;
    background: -webkit-linear-gradient(rgba(128,104,190,1) 0%, rgba(1,186,154,1) 100%);
    -webkit-background-clip: text;
`

export const HighlightsBlocks = styled.div`
	display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const HighlightsBlock = styled.div`
	padding-top: 5px;
    width: 30%;
    height: 125px;
    background-color: #ffffff;
    border-radius: 10px;
    margin: 10px;
    text-align: center;
`

export const HighlightDetails = styled.p`
	color: #aeadb3;
    margin-top: 3px;
    font-size: 14px;
`