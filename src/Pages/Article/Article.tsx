/* eslint-disable security/detect-object-injection */
import { FC, useContext, useEffect } from 'react'

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
} from './Styles'

const Article: FC = () => {
	const { SetSelectedArticleId, SelectedArticleId } = useContext(PagesContext)

	useTitle(People[SelectedArticleId ?? ''].name)

	const OnBack = () => {
		SetSelectedArticleId(undefined)
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

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
		</>
	)
}

export default Article
