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
	HowToPlay,
	TitleWrapper,
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
	const TimeoutRefStart = useRef<number>(0)

	useTitle('Kuis')

	const OnBack = () => {
		SetIsQuiz(false)
	}

	const ChangeQuestion = useCallback(() => {
		SetIsAnswered(false)

		TimeoutRefStart.current = new Date().getTime()

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
				SetScore(prev => prev + TimeLeft)
			} else {
				// Wrong
				SetScore(prev =>
					prev - (QuizQuestion[QuestionId].time - TimeLeft) <= 0
						? 0
						: prev - (QuizQuestion[QuestionId].time - TimeLeft)
				)
			}

			SetIsAnswered(true)

			setTimeout(() => {
				ChangeQuestion()
			}, 2000)
		},
		[ChangeQuestion, IsAnswered, QuestionId, TimeLeft]
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

		clearInterval(TimeoutRef.current)
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

		TimeoutRef.current = setInterval(() => {
			if (
				(new Date().getTime() - TimeoutRefStart.current) / 1000 >=
				QuizQuestion[QuestionId].time
			) {
				// Wrong
				OnAnswer(null)
			}
		}, 100)

		return () => clearInterval(TimeoutRef.current)
	}, [OnAnswer, QuestionId])

	return (
		<>
			<Header>
				<BackButton onClick={OnBack}>Kembali</BackButton>
			</Header>
			<Content>
				<TitleWrapper>
					<Title>Kuis</Title>
					<HowToPlay
						title='Penilaian
Jika Benar Skor Ditambah Waktu Tersisa
Jika Salah Skor Dikurang (Waktu Untuk Menjawab Dikurang Waktu Tersisa)'
					>
						<p>?</p>
					</HowToPlay>
				</TitleWrapper>
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
