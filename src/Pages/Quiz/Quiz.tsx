/* eslint-disable security/detect-object-injection */
import { FC, useCallback, useContext, useEffect, useState } from 'react'

import QuizQuestion from 'Constants/Quiz'

import PagesContext from 'Contexts/Pages/Pages'

import Footer from 'Components/Footer/Footer'
import BackToTop from 'Components/BackToTop/BackToTop'
import useTitle from 'Hooks/useTitle'

import { PickUnique, Shuffle } from 'Utils/Array'

import {
	Header,
	BackButton,
	Content,
	Title,
	QuizContainer,
	QuizContainerHeader,
	QuizContainerHeaderLeft,
	Question,
	Text,
	Answers,
	Answer,
} from './Styles'

const Quiz: FC = () => {
	const { SetIsQuiz } = useContext(PagesContext)

	const [Score, SetScore] = useState<number>(0)

	const [QuestionId, SetQuestionId] = useState<string>('')
	const [AnswerChoices, SetAnswerChoices] = useState<string[]>([''])

	useTitle('Kuis')

	const OnBack = () => {
		SetIsQuiz(false)
	}

	const ChangeQuestion = useCallback(() => {
		SetQuestionId(prev => {
			const newId = PickUnique(Object.keys(QuizQuestion), prev)

			SetAnswerChoices(Shuffle([...QuizQuestion[newId].answers]))

			return newId
		})
	}, [])

	const OnAnswer = useCallback(
		(answer: string) => {
			if ([...QuizQuestion[QuestionId].answers][0] === answer) {
				// Correct

				SetScore(prev => prev + 1)
			} else {
				// Wrong

				SetScore(prev => (prev <= 0 ? prev : prev - 1))
			}

			ChangeQuestion()
		},
		[ChangeQuestion, QuestionId]
	)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		ChangeQuestion()
	}, [ChangeQuestion])

	return (
		<>
			<Header>
				<BackButton onClick={OnBack}>Kembali</BackButton>
			</Header>
			<Content>
				<Title>Kuis</Title>
				<QuizContainer>
					<QuizContainerHeader>
						<Question>
							{QuizQuestion[QuestionId]?.question ?? ''}
						</Question>
						<QuizContainerHeaderLeft>
							<Text>Skor: {Score}</Text>
							<Text>Waktu : 10</Text>
						</QuizContainerHeaderLeft>
					</QuizContainerHeader>
					<Answers>
						{AnswerChoices.map(choice => (
							<Answer
								key={choice}
								onClick={() => OnAnswer(choice)}
							>
								<p>{choice}</p>
							</Answer>
						))}
					</Answers>
				</QuizContainer>
			</Content>
			<Footer />
			<BackToTop />
		</>
	)
}

export default Quiz
