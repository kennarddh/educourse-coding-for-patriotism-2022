import styled from 'styled-components'

import { ILoaderRing } from './Types'

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100vh;

	background-color: #ff731d;
`

export const LoadingRing = styled.div<ILoaderRing>`
	border: 10px solid #1746a2;
	border-top: 10px solid #5f9df7;
	border-radius: 50%;
	animation: spin 1s linear infinite;

	width: ${props => props.size}px;
	height: ${props => props.size}px;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
