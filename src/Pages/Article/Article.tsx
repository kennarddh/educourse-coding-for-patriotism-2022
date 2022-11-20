/* eslint-disable security/detect-object-injection */
import { FC, useContext, useEffect, useState } from 'react'

import PagesContext from 'Contexts/Pages/Pages'

import People from 'Constants/People'

import Footer from 'Components/Footer/Footer'
import BackToTop from 'Components/BackToTop/BackToTop'
import useTitle from 'Hooks/useTitle'

import {
	Header,
	BackButton,
	Content,
	Title,
	ImageContainer,
	Source,
	Image,
	TextContainer,
	Text,
	HighlightIcon,
	Highlight,
} from './Styles'

import type { IHighlightData } from './Types'

const Article: FC = () => {
	const { SetSelectedArticleId, SelectedArticleId } = useContext(PagesContext)

	const [HighlightData, SetHighlightData] = useState<IHighlightData>(() => {
		const data =
			localStorage.getItem(`highlights-${SelectedArticleId}`) ?? '[]'

		return new Set(JSON.parse(data))
	})

	useTitle(People[SelectedArticleId ?? ''].name)

	const OnBack = () => {
		SetSelectedArticleId(undefined)
	}

	const OnHighlight = () => {
		const selection: Selection | null = getSelection()

		const startIndex: number = selection?.anchorOffset ?? 0

		const endIndex: number = (selection?.focusOffset ?? 0) - 1

		const newSet = new Set(HighlightData)

		for (let i = startIndex; i <= endIndex; i++) {
			if (newSet.has(i)) newSet.delete(i)
			else newSet.add(i)
		}

		SetHighlightData(newSet)
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		localStorage.setItem(
			`highlights-${SelectedArticleId}`,
			JSON.stringify([...HighlightData])
		)
	}, [HighlightData, SelectedArticleId])

	if (!SelectedArticleId) return null

	return (
		<>
			<Header>
				<BackButton onClick={OnBack}>Kembali</BackButton>
			</Header>
			<Content>
				<Title>{People[SelectedArticleId].name}</Title>
				<ImageContainer>
					<Source
						href={People[SelectedArticleId].thumbnailSource}
						target='_blank'
					>
						Sumber: {People[SelectedArticleId].thumbnailSource}
					</Source>
					<Image src={People[SelectedArticleId].thumbnail} />
				</ImageContainer>
				<TextContainer>
					<Source
						href={People[SelectedArticleId].articleSource}
						target='_blank'
					>
						Sumber: {People[SelectedArticleId].articleSource}
					</Source>
					<Text>{People[SelectedArticleId].article}</Text>
				</TextContainer>
			</Content>
			<Footer />
			<BackToTop />
			<Highlight onClick={OnHighlight}>
				<HighlightIcon
					src='Stabilo.png'
					title='Sumber ikon https://thenounproject.com/icon/stabilo-2348306/'
				/>
			</Highlight>
		</>
	)
}

export default Article
