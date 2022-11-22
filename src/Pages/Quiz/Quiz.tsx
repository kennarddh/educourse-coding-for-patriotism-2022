/* eslint-disable security/detect-object-injection */
import { FC, useCallback, useContext, useEffect, useRef, useState } from 'react'

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
	const [TimeLeft, SetTimeLeft] = useState<number>(0)

	const [QuestionId, SetQuestionId] = useState<string>('')
	const [AnswerChoices, SetAnswerChoices] = useState<string[]>([''])

	const LastIdRef = useRef<string>('')

	useTitle('Kuis')

	const OnBack = () => {
		SetIsQuiz(false)
	}

	const ChangeQuestion = useCallback((timeOut = false) => {
		SetQuestionId(prev => {
			const newId = PickUnique(Object.keys(QuizQuestion), prev)

			LastIdRef.current = newId

			SetAnswerChoices(Shuffle([...QuizQuestion[newId].answers]))

			SetTimeLeft(QuizQuestion[newId].time)

			if (timeOut) {
				SetScore(prev => {
					return prev <= 0 ? prev : prev - 1
				})
			}

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

	useEffect(() => {
		const intervalId = setInterval(() => {
			SetTimeLeft(prev => {
				if (prev <= 0 && LastIdRef.current === QuestionId) {
					ChangeQuestion(true)

					return 0
				} else {
					return prev - 1
				}
			})
		}, 1000)

		return () => clearInterval(intervalId)
	}, [ChangeQuestion, QuestionId])

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
							<Text>Waktu : {TimeLeft}</Text>
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
