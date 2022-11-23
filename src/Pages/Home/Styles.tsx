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

	@media only screen and (max-width: 900px) {
		flex-direction: column-reverse;
	}
`

export const HeaderContaienr = styled.div`
	height: 100vh;

	display: flex;
	align-items: center;

	@media only screen and (max-width: 900px) {
		min-height: 100vh;
		height: unset;
	}
`

export const Wave = styled.img`
	/* I don't know why this require 1px offset */

	width: calc(100% + 2px);

	position: absolute;
	bottom: -10px; // Remove unknown line
	left: -1px;
`

export const Title = styled.h1`
	width: 40%;

	color: #fff7e9;

	font-style: normal;
	font-weight: 800;
	font-size: 100px;
	text-align: center;

	@media only screen and (max-width: 900px) {
		font-size: 50px;
		margin-top: 12px;
	}

	@media only screen and (max-width: 400px) {
		font-size: 35px;
	}
`

export const HeaderImage = styled.img`
	max-width: 50%;
	max-height: 100%;

	@media only screen and (max-width: 900px) {
		width: 30%;
	}

	@media only screen and (max-width: 550px) {
		width: 50%;
	}

	@media only screen and (max-width: 400px) {
		width: 70%;
		max-width: unset;
	}
`

export const Content = styled.main`
	background-color: #fff7e9;

	width: 100%;

	padding: 48px;

	display: flex;
	align-items: center;
	flex-direction: column;
`

export const Cards = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;

	gap: 20px;

	width: 100%;
`

export const ModalContent = styled.div`
	width: 80%;
	height: 90%;

	border-radius: 24px;

	background-color: #fff7e9;
	z-index: 9999;

	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`

export const ModalCards = styled(Cards)`
	overflow-y: scroll;

	height: 90%;

	padding: 12px 10px;

	/* Firefox scroll */
	@supports (-moz-appearance: none) {
		scrollbar-width: auto;
		scrollbar-color: #1746a2 #5f9df7;
	}

	/* Webkit scroll */
	&::-webkit-scrollbar {
		width: 24px;
	}

	&::-webkit-scrollbar-track {
		background: #5f9df7;
		border-radius: 0 0 24px 0;
	}

	&::-webkit-scrollbar-thumb {
		background: #1746a2;
		border-radius: 0 0 24px 0;
	}
`

export const ModalHeader = styled.div`
	height: 10%;

	background-color: #ff731d;
	width: 100%;

	border-radius: 24px 24px 0 0;

	display: flex;

	padding: 0 10px;

	justify-content: space-evenly;
	align-items: center;
`

export const ModalTitle = styled.h3`
	color: #fff7e9;
	font-size: 3vmax;

	@media only screen and (min-width: 850px) {
		font-size: 30px;
	}
`

export const ModalCloseButton = styled.button`
	color: #fff7e9;
	border-radius: 8px;
	border: none;
	background-color: transparent;
	font-size: 24px;
	font-weight: 600;

	padding: 2px 4px;

	cursor: pointer;

	&:focus {
		outline: 5px solid #5f9df7;
	}

	&:hover {
		outline: 5px solid #5f9df7;
	}
`

export const AboutUsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	flex-direction: column;

	gap: 10px;
	font-weight: 500;

	margin-bottom: 30px;

	width: 60%;

	@media only screen and (max-width: 700px) {
		width: 90%;
	}
`

export const AboutUsTitle = styled.h3`
	color: #ff731d;

	font-style: normal;
	font-weight: 800;
	font-size: 30px;
	text-align: center;

	@media only screen and (max-width: 400px) {
		font-size: 25px;
	}
`

export const AboutUsContent = styled.p`
	color: #1746a2;

	font-size: 20px;
	text-align: center;
`
