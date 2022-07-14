import { TimelineBlock, TimelineIcon, SpecialTimelineIcon, Temperature, Time } from './OneTimelineBlock.styles'

function OneTimelineBlock({ img, temp, time }) {
	return (
		<TimelineBlock>
			<TimelineIcon src={img} />
			<Temperature>{temp}</Temperature>
			<Time>{time}</Time>
		</TimelineBlock>
	)
}

export default OneTimelineBlock;