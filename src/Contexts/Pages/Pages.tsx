import { FC, createContext, useState } from 'react'

import type { IPagesContext, IPagesContextProviderProps } from './Types'

const PagesContext = createContext<IPagesContext>({
	SelectedArticleId: undefined,
	SetSelectedArticleId: () => undefined,
	IsQuiz: false,
	SetIsQuiz: () => undefined,
})

export const PagesProvider: FC<IPagesContextProviderProps> = ({ children }) => {
	const [SelectedArticleId, SetSelectedArticleId] = useState<
		string | undefined
	>(undefined)

	const [IsQuiz, SetIsQuiz] = useState<boolean>(false)

	return (
		<PagesContext.Provider
			value={{
				SelectedArticleId,
				SetSelectedArticleId,
				IsQuiz,
				SetIsQuiz,
			}}
		>
			{children}
		</PagesContext.Provider>
	)
}

export default PagesContext
