/* eslint-disable security/detect-object-injection */
import { FC, useContext, useEffect } from 'react'

import PagesContext from 'Contexts/Pages/Pages'

import Footer from 'Components/Footer/Footer'
import BackToTop from 'Components/BackToTop/BackToTop'
import useTitle from 'Hooks/useTitle'

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

	useTitle('Kuis')

	const OnBack = () => {
		SetIsQuiz(false)
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<Header>
				<BackButton onClick={OnBack}>Kembali</BackButton>
			</Header>
			<Content>
				<Title>Kuis</Title>
				<QuizContainer>
					<QuizContainerHeader>
						<Question>Kapan Dr. Ir. H. Soekarno Lahir?</Question>
						<QuizContainerHeaderLeft>
							<Text>Skor: 0</Text>
							<Text>Waktu : 10</Text>
						</QuizContainerHeaderLeft>
					</QuizContainerHeader>
					<Answers>
						<Answer isAnswered>
							<p>1</p>
						</Answer>
						<Answer isAnswered>
							<p>2</p>
						</Answer>
						<Answer isAnswered>
							<p>3</p>
						</Answer>
						<Answer isCorrect isAnswered>
							<p>4</p>
						</Answer>
					</Answers>
				</QuizContainer>
			</Content>
			<Footer />
			<BackToTop />
		</>
	)
}

export default Quiz
