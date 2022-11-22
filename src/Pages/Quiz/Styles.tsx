import styled from 'styled-components'

import { IStyledAnswer } from './Types'

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

export const QuizContainer = styled.div`
	width: 80%;
	height: 80%;

	margin-bottom: 100px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	gap: 20px;
`

export const QuizContainerHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;

	flex-direction: row;

	@media only screen and (max-width: 700px) {
		flex-direction: column-reverse;
	}
`

export const QuizContainerHeaderLeft = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	flex-direction: column;
`

export const Question = styled.h2`
	color: #ff731d;

	text-align: center;
`

export const Text = styled.p`
	color: #ff731d;
	font-weight: 700;
	font-size: 20px;
`

export const Answers = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;

	gap: 20px;

	flex-wrap: wrap;
`

export const Answer = styled.div<IStyledAnswer>`
	width: 45%;
	height: 150px;

	border-radius: 24px;

	display: flex;
	justify-content: center;
	align-items: center;

	color: #fff7e9;

	font-weight: 600;

	font-size: 20px;

	background-color: ${({ isAnswered = false, isCorrect = false }) =>
		isAnswered && isCorrect ? '#00dd00' : isAnswered ? '#f00' : '#5f9df7'};
`
