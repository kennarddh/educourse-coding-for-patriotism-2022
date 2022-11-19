/* eslint-disable security/detect-object-injection */
import { FC, useContext } from 'react'

import PagesContext from 'Contexts/Pages/Pages'

import People from 'Constants/People'

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

	const OnBack = () => {
		SetSelectedArticleId(undefined)
	}

	if (!SelectedArticleId) return null

	return (
		<>
			<Header>
				<BackButton onClick={OnBack}>Kembali</BackButton>
			</Header>
			<Content>
				<Title>{People[SelectedArticleId].name}</Title>
				<ImageContainer>
					<Source>
						Sumber: {People[SelectedArticleId].thumbnailSource}
					</Source>
					<Image src={People[SelectedArticleId].thumbnail} />
				</ImageContainer>
				<TextContainer>
					<Source>
						Sumber: {People[SelectedArticleId].articleSource}
					</Source>
					<Text>{People[SelectedArticleId].article}</Text>
				</TextContainer>
			</Content>
		</>
	)
}

export default Article
