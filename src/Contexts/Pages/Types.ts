import type { ReactNode } from 'react'

import { ReactSetState } from 'Types'

export interface IPagesContext {
	SelectedArticleId: string | undefined
	SetSelectedArticleId: ReactSetState<string | undefined>
}

export interface IPagesContextProviderProps {
	children: ReactNode
}
