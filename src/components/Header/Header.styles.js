import styled from 'styled-components'

export const Headerr = styled.header`
	display: flex;
    justify-content: space-between;
`

export const MyCities = styled.p`
	font-weight: 600;
    color: #525252;
    padding: 5px 0;
    font-size: 16px;
    margin-top: 5px;
`

export const NavButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #62656c;
    margin-left: 10px;
    font-size: 14px;
	&:nth-child(1) {
		font-weight: 600;
	}
	&:nth-child(2) {
		color: #a0a0a0;
	}
	&:last-child {
		color: white;
		padding: 10px;
		font-weight: 600;
		border-radius: 10px;
		background: rgb(128,104,190);
		background: linear-gradient(132deg, rgba(128,104,190,1) 0%, rgba(1,186,154,1) 100%);
	}
`