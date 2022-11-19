import { FC } from 'react'

import Home from 'Pages/Home/Home'
import { PagesProvider } from 'Contexts/Pages/Pages'

const App: FC = () => {
	return (
		<PagesProvider>
			<Home />
		</PagesProvider>
	)
}

export default App
