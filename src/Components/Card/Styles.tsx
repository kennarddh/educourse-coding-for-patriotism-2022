import styled from 'styled-components'

export const Container = styled.article`
	width: 300px;
	height: 400px;

	@media only screen and (max-width: 400px) {
		height: unset;
	}
`

export const Image = styled.img`
	width: 100%;
	height: 75%;

	display: block;

	border-radius: 24px 24px 0 0;
`

export const Content = styled.div`
	width: 100%;
	height: 25%;

	background-color: #5f9df7;

	border-radius: 0 0 24px 24px;

	padding: 4px;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;
`

export const Name = styled.h3`
	font-style: normal;
	font-weight: 800;
	font-size: 24px;
	text-align: center;

	color: #fff7e9;
`

export const Button = styled.button`
	border: none;

	border-radius: 8px;

	padding: 10px 20px;

	font-style: normal;
	font-weight: 600;
	font-size: 20px;

	color: #fff7e9;

	background-color: #ff731d;

	&:focus,
	&:hover {
		outline: 3px solid #fff7e9;
	}

	@media only screen and (max-width: 330px) {
		padding: 5px 10px;
		font-size: 16px;
	}
`
