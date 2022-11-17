import styled from 'styled-components'

export const Header = styled.header`
	width: 100%;
	height: 125vh;

	background-color: #ff731d;

	position: relative;
`

export const HeaderContent = styled.div`
	width: 100%;
	height: 90%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`

export const HeaderContaienr = styled.div`
	height: 100vh;

	display: flex;
	align-items: center;
`

export const Wave = styled.img`
	/* I don't know why this need 1px offset */

	width: calc(100% + 2px);

	position: absolute;
	bottom: 0;
	left: -1px;
`

export const Title = styled.h1`
	width: 50%;

	color: #fff7e9;

	font-style: normal;
	font-weight: 800;
	font-size: 100px;
	text-align: center;
`

export const HeaderImage = styled.img`
	max-width: 50%;
	max-height: 100%;
`
