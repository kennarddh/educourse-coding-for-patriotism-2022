/* eslint-disable jest/require-hook */
import React from 'react'
import ReactDOM from 'react-dom/client'

import { PagesProvider } from 'Contexts/Pages/Pages'

import App from './App'

import GlobalStyle from './Styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<GlobalStyle />
		<PagesProvider>
			<App />
		</PagesProvider>
	</React.StrictMode>
)
