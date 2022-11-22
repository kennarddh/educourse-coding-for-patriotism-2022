import { FC, useContext, lazy, Suspense } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomLazy = (result: any, delay = 0) =>
	lazy(() => {
		return new Promise(resolve => {
			setTimeout(() => resolve(result), delay)
		})
	})

const Article = CustomLazy(import('Pages/Article/Article'), 100)
const Home = CustomLazy(import('Pages/Home/Home'), 100)
const Quiz = CustomLazy(import('Pages/Quiz/Quiz'), 100)

import PagesContext from 'Contexts/Pages/Pages'

import Loading from 'Components/Loading/Loading'

const App: FC = () => {
	const { SelectedArticleId, IsQuiz } = useContext(PagesContext)

	return (
		<Suspense fallback={<Loading />}>
			{IsQuiz ? <Quiz /> : SelectedArticleId ? <Article /> : <Home />}
		</Suspense>
	)
}

export default App
