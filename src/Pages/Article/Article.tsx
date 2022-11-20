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
		const range = selection?.getRangeAt(0)
		const cloneContentsChildren = range?.cloneContents().children

		console.log({ selection, range, cloneContentsChildren })

		if (cloneContentsChildren?.length === 0) {
			// Select in one group
		} else {
			// Selection in {length} group
		}

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
							.reduce<
								{
									value: string
									isHighlighted: boolean
									startIndex: number
								}[]
							>((acc, val, index) => {
								if (
									HighlightData.has(index) ===
										HighlightData.has(index - 1) &&
									acc[acc.length - 1]
								)
									acc[acc.length - 1].value += val
								else
									acc.push({
										value: val,
										isHighlighted: HighlightData.has(index),
										startIndex: index,
									})

								return acc
							}, [])
							.map((val, index) => (
								<HighlightSpan
									key={index}
									highlight={val.isHighlighted}
									data-index={index}
									data-startIndex={val.startIndex}
								>
									{val.value}
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
