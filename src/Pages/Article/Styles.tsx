import styled, { css } from 'styled-components'

import type { IHighlightSpan } from './Types'

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

export const BackButton = styled.button`
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

export const Source = styled.a``

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

export const HighlightIcon = styled.img`
	width: 100%;
	height: 100%;
`

export const Highlight = styled.button`
	position: fixed;
	bottom: 100px;
	right: 25px;

	border-radius: 50%;

	width: 50px;
	height: 50px;

	z-index: 999;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: transparent;

	cursor: pointer;

	border: 5px solid #1746a2;
`

export const HighlightSpan = styled.span<IHighlightSpan>`
	${({ highlight }) =>
		highlight
			? css`
					background-color: #5f9df7;
			  `
			: ''}
`
