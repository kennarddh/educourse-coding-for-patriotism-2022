import { FC, useContext } from 'react'

import Article from 'Pages/Article/Article'
import Home from 'Pages/Home/Home'

import PagesContext from 'Contexts/Pages/Pages'
import Quiz from 'Pages/Quiz/Quiz'

const App: FC = () => {
	const { SelectedArticleId, IsQuiz } = useContext(PagesContext)

	if (IsQuiz) return <Quiz />

	if (SelectedArticleId) return <Article />

	return <Home />
}

export default App
