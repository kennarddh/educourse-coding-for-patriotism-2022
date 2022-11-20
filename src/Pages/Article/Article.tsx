/* eslint-disable security/detect-object-injection */
import { FC, useContext, useEffect, useState, useRef } from 'react'

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
	HighlightSpan,
} from './Styles'

import type { IHighlightData } from './Types'

const Article: FC = () => {
	const { SetSelectedArticleId, SelectedArticleId } = useContext(PagesContext)

	const [HighlightData, SetHighlightData] = useState<IHighlightData>(() => {
		const data =
			localStorage.getItem(`highlights-${SelectedArticleId}`) ?? '[]'

		return new Set(JSON.parse(data))
	})

	const TextRef = useRef<HTMLParagraphElement>(null)

	useTitle(People[SelectedArticleId ?? ''].name)

	const OnBack = () => {
		SetSelectedArticleId(undefined)
	}

	const OnHighlight = () => {
		const selection: Selection | null = getSelection()

		if (selection?.rangeCount === 0)
			return alert('Tidak ada teks yang dipilih')

		const newSet = new Set(HighlightData)

		const range = selection?.getRangeAt(0)

		const cloneContentsChildren = range?.cloneContents().children

		const startEl = cloneContentsChildren?.[0]
		const endEl = cloneContentsChildren?.[cloneContentsChildren?.length - 1]

		if (!(startEl && endEl)) return alert('Tidak ada teks yang dipilih')

		const startIndex: number = parseInt(
			startEl?.getAttribute('data-index') ?? '0',
			10
		)

		const endIndex: number = parseInt(
			endEl?.getAttribute('data-index') ?? '0',
			10
		)

		for (let i = startIndex; i <= endIndex; i++) {
			if (newSet.has(i)) newSet.delete(i)
			else newSet.add(i)
		}

		SetHighlightData(newSet)

		selection?.removeAllRanges()
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
					<Text ref={TextRef}>
						{People[SelectedArticleId].article
							.split('')
							.map((character, index) => (
								<HighlightSpan
									key={index}
									highlight={HighlightData.has(index)}
									data-index={index}
								>
									{character}
								</HighlightSpan>
							))}
					</Text>
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
