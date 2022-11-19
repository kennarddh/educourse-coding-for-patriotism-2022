import { FC } from 'react'

import Article from 'Pages/Article/Article'
// import Home from 'Pages/Home/Home'
import { PagesProvider } from 'Contexts/Pages/Pages'

const App: FC = () => {
	return (
		<PagesProvider>
			{/* <Home /> */}
			<Article />
		</PagesProvider>
	)
}

export default App
