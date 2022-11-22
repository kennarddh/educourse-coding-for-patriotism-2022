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
	const [HighScore, SetHighScore] = useState<number>(() => {
		const data = localStorage.getItem('quizHighScore') ?? '0'

		return parseInt(data, 10)
	})

	const [QuestionId, SetQuestionId] = useState<string>('')
	const [AnswerChoices, SetAnswerChoices] = useState<string[]>([''])

	const [IsAnswered, SetIsAnswered] = useState<boolean>(false)

	const IntervalRef = useRef<number>(0)
	const TimeoutRef = useRef<number>(0)

	useTitle('Kuis')

	const OnBack = () => {
		SetIsQuiz(false)
	}

	const ChangeQuestion = useCallback(() => {
		SetIsAnswered(false)

		SetQuestionId(prev => {
			const id = PickUnique(Object.keys(QuizQuestion), prev)

			SetAnswerChoices(Shuffle([...QuizQuestion[id].answers]))

			SetTimeLeft(QuizQuestion[id].time)

			return id
		})
	}, [])

	const OnAnswer = useCallback(
		(answer: string | null) => {
			if (IsAnswered) return

			if ([...QuizQuestion[QuestionId].answers][0] === answer) {
				// Correct
				SetScore(prev => prev + 1)
			} else {
				// Wrong
				SetScore(prev => (prev <= 0 ? prev : prev - 1))
			}

			SetIsAnswered(true)

			setTimeout(() => {
				ChangeQuestion()
			}, 2000)
		},
		[ChangeQuestion, IsAnswered, QuestionId]
	)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		ChangeQuestion()
	}, [ChangeQuestion])

	useEffect(() => {
		SetHighScore(prev => (Score > prev ? Score : prev))
	}, [Score])

	useEffect(() => {
		localStorage.setItem('quizHighScore', HighScore.toString())
	}, [HighScore])

	useEffect(() => {
		if (!IsAnswered) return

		console.log('clear')

		clearTimeout(TimeoutRef.current)
	}, [IsAnswered])

	useEffect(() => {
		IntervalRef.current = setInterval(() => {
			if (IsAnswered) return

			SetTimeLeft(prev => (prev > 0 ? prev - 1 : prev))
		}, 1000)

		return () => clearInterval(IntervalRef.current)
	}, [IsAnswered])

	useEffect(() => {
		if (!QuestionId) return

		console.log(QuizQuestion[QuestionId].time * 1000)

		TimeoutRef.current = setTimeout(() => {
			// Wrong
			OnAnswer(null)
			console.log('timeout')
		}, QuizQuestion[QuestionId].time * 1000)

		return () => clearTimeout(TimeoutRef.current)
	}, [OnAnswer, QuestionId])

	useEffect(() => {
		console.log({ ref: TimeoutRef.current })
	})

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
							<Text>Skor Tertinggi: {HighScore}</Text>
							<Text>Skor: {Score}</Text>
							<Text>Waktu: {TimeLeft}</Text>
						</QuizContainerHeaderLeft>
					</QuizContainerHeader>
					<Answers>
						{AnswerChoices.map(choice => (
							<Answer
								key={choice}
								onClick={() => OnAnswer(choice)}
								isAnswered={IsAnswered}
								isCorrect={
									choice ===
									[
										...(QuizQuestion[QuestionId]?.answers ??
											[]),
									][0]
								}
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
