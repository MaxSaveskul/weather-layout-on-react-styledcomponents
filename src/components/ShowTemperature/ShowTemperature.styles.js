import styled from 'styled-components'

export const ShowTemperatureDiv = styled.div`
	    position: relative;
`

export const BallDiv = styled.div`
	position: absolute;
    left: 95px;
    top: -60px;
    font-size: 60px;
    padding: 25px 15px 25px 25px;
    border-radius: 100%;
    font-weight: 600;
    background: rgb(128,104,190);
    background: linear-gradient(139deg, rgba(128,104,190,1) 0%, rgba(1,186,154,1) 100%);
`

export const CityNameDiv = styled.div`
	position: absolute;
    top: 90px;
    left: 120px;
`

export const PlusButton = styled.button`
	position: absolute;
    border: 1px solid white;
    background-color: #23324765;
    border-radius: 100%;
    padding: 6px 10px;
    top: 10px;
    left: 275px;
    color: white;
    cursor: pointer;
`