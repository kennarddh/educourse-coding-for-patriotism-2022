import type { ILocationLookup } from 'Constants/LocationLookup'

export interface IPerson {
	name: string
	origin: keyof ILocationLookup
	image: string
	thumbnail: string
	article: string
	imageSource: string
	thumbnailSource: string
	articleSource: string
}

export type IPeople = Record<string, IPerson>
