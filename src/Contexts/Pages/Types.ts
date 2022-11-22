import type { ReactNode } from 'react'

import { ReactSetState } from 'Types'

export interface IPagesContext {
	SelectedArticleId: string | undefined
	SetSelectedArticleId: ReactSetState<string | undefined>
	IsQuiz: boolean
	SetIsQuiz: ReactSetState<boolean>
}

export interface IPagesContextProviderProps {
	children: ReactNode
}
