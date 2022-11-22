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

import type { IHighlightData, ILocalStorageHighlightData } from './Types'
import QuizIcon from 'Components/QuizIcon/QuizIcon'

const Article: FC = () => {
	const { SetSelectedArticleId, SelectedArticleId } = useContext(PagesContext)

	const [HighlightData, SetHighlightData] = useState<IHighlightData>(() => {
		const data =
			localStorage.getItem(`highlights-${SelectedArticleId}`) ?? '[]'

		const parsed: ILocalStorageHighlightData = JSON.parse(data)

		const result = parsed.reduce<number[]>((acc, [start, end]) => {
			for (let i = start; i <= end; i++) {
				acc.push(i)
			}

			return acc
		}, [])

		return new Set(result)
	})

	const TextRef = useRef<HTMLParagraphElement>(null)

	useTitle(People[SelectedArticleId ?? ''].name)

	const OnBack = () => {
		SetSelectedArticleId(undefined)
	}

	const OnHighlight = () => {
		const selection: Selection | null = getSelection()

		if (selection?.rangeCount === 0)
			return alert('Tidak ada teks yang di seleksi')

		const range = selection?.getRangeAt(0)
		const cloneContentsChildren = range?.cloneContents().children
		const commonAncestorContainer = range?.commonAncestorContainer

		const newSet = new Set(HighlightData)

		if (cloneContentsChildren?.length === 0) {
			// Select in one group

			if (
				commonAncestorContainer?.parentElement?.parentElement !==
				TextRef.current
			)
				return alert('Tidak ada teks yang di seleksi')

			const containerStartIndex: number = parseInt(
				commonAncestorContainer?.parentElement?.getAttribute(
					'data-start-index'
				) ?? '0',
				10
			)

			const startIndex = (range?.startOffset ?? 0) + containerStartIndex
			const endIndex = (range?.endOffset ?? 0) - 1 + containerStartIndex

			for (let i = startIndex; i <= endIndex; i++) {
				if (newSet.has(i)) newSet.delete(i)
				else newSet.add(i)
			}
		} else {
			// Selection in {length} group

			if (commonAncestorContainer !== TextRef.current)
				return alert('Tidak ada teks yang di seleksi')

			const firstContainer = cloneContentsChildren?.[0]
			const lastContainer =
				cloneContentsChildren?.[cloneContentsChildren.length - 1]

			const firstContainerStartIndex: number = parseInt(
				firstContainer?.getAttribute('data-start-index') ?? '0',
				10
			)

			const lastContainerStartIndex: number = parseInt(
				lastContainer?.getAttribute('data-start-index') ?? '0',
				10
			)

			const startIndex =
				(range?.startOffset ?? 0) + firstContainerStartIndex
			const endIndex =
				(range?.endOffset ?? 0) - 1 + lastContainerStartIndex

			for (let i = startIndex; i <= endIndex; i++) {
				if (newSet.has(i)) newSet.delete(i)
				else newSet.add(i)
			}
		}

		SetHighlightData(newSet)

		selection?.removeAllRanges()
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		const data = [...HighlightData].reduce<ILocalStorageHighlightData>(
			(acc, value) => {
				if (value - 1 === acc.at(-1)?.[1]) {
					acc[acc.length - 1][1] = value
				} else {
					acc.push([value, value])
				}

				return acc
			},
			[]
		)

		localStorage.setItem(
			`highlights-${SelectedArticleId}`,
			JSON.stringify(data)
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
									data-start-index={val.startIndex}
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
			<QuizIcon />
		</>
	)
}

export default Article
