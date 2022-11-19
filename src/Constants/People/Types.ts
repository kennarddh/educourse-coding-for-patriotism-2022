export interface IPerson {
	name: string
	origin: string
	image: string
	thumbnail: string
	article: string
	imageSource: string
	thumbnailSource: string
	articleSource: string
}

export type IPeople = Record<string, IPerson>
