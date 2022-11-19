import { FC, useContext } from 'react'

import Article from 'Pages/Article/Article'
import Home from 'Pages/Home/Home'

import PagesContext from 'Contexts/Pages/Pages'

const App: FC = () => {
	const { SelectedArticleId } = useContext(PagesContext)

	return SelectedArticleId ? <Article /> : <Home />
}

export default App
