import type { Dispatch, SetStateAction } from 'react'

export type ReactSetState<T> = Dispatch<SetStateAction<T> | T>
