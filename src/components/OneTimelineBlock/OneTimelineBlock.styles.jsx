import styled from 'styled-components'

export const TimelineBlock = styled.div`
	padding-top: 10px;
    width: 20%;
    height: 150px;
    background-color: #ffffff;
    border-radius: 10px;
    margin: 10px;
    text-align: center;
`

export const TimelineIcon = styled.img`
	width: 80px;
    margin-bottom: 3px;
`

export const SpecialTimelineIcon = styled(TimelineIcon)`
	width: 120px;
`

export const Temperature = styled.p`
	font-weight: 700;
    font-size: 18px;
    color: #4e5356;
`

export const Time = styled.p`
	color: #aeadb3;
    margin-top: 3px;
    font-size: 14px;
`