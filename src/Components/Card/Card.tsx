import { FC, useContext } from 'react'

import { PagesContext } from 'Contexts/Pages/Pages'

import type { Props } from './Types'

import { Container, Image, Content, Name, Button } from './Styles'

const Card: FC<Props> = ({ imagePath, imageAlt, id, name }) => {
	const { SetSelectedArticleId } = useContext(PagesContext)

	const OnClick = () => {
		SetSelectedArticleId(id)
	}

	return (
		<Container>
			<Image src={imagePath} alt={imageAlt} />
			<Content>
				<Name>{name}</Name>
				<Button onClick={OnClick}>Baca selengkapnya</Button>
			</Content>
		</Container>
	)
}

export default Card
