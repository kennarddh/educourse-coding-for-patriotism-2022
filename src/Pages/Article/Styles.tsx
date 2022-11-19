import styled from 'styled-components'

export const Header = styled.h1`
	position: fixed;
	top: 0;
	width: 100%;
	height: 50px;

	border-radius: 0 0 24px 24px;

	background-color: #ff731d;

	display: flex;
	align-items: center;
	padding: 0 48px;

	@media only screen and (max-width: 500px) {
		justify-content: center;
	}
`

export const BackButton = styled.div`
	color: #fff7e9;
`

export const Content = styled.div`
	background-color: #fff7e9;

	padding-top: 75px;

	display: flex;
	align-items: center;

	flex-direction: column;
	gap: 24px;
`

export const Title = styled.h1``

export const ImageContainer = styled.div`
	width: 60%;

	@media only screen and (max-width: 500px) {
		width: 80%;
	}
`

export const Source = styled.p``

export const Image = styled.img`
	width: 100%;
`

export const TextContainer = styled.div`
	width: 80%;

	padding-bottom: 50px;
`

export const Text = styled.p`
	white-space: pre-line;
`
