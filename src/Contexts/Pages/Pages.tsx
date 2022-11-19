import { FC, createContext, useState } from 'react'

import type { IPagesContext, IPagesContextProviderProps } from './Types'

export const PagesContext = createContext<IPagesContext>({
	SelectedArticleId: undefined,
	SetSelectedArticleId: () => undefined,
})

export const PagesProvider: FC<IPagesContextProviderProps> = ({ children }) => {
	const [SelectedArticleId, SetSelectedArticleId] = useState<
		string | undefined
	>(undefined)

	return (
		<PagesContext.Provider
			value={{ SelectedArticleId, SetSelectedArticleId }}
		>
			{children}
		</PagesContext.Provider>
	)
}
