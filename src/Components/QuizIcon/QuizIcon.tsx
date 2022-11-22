import { FC, useContext } from 'react'

import { Container, Image } from './Styles'

import PagesContext from 'Contexts/Pages/Pages'

const QuizIcon: FC = () => {
	const { SetIsQuiz, SetSelectedArticleId } = useContext(PagesContext)

	const OnClick = () => {
		SetIsQuiz(true)

		SetSelectedArticleId(undefined)
	}

	return (
		<Container onClick={OnClick} title='Kuis'>
			<Image src='QuizIcon.png' />
		</Container>
	)
}

export default QuizIcon
