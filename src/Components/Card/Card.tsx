import { FC, useContext } from 'react'

import PagesContext from 'Contexts/Pages/Pages'

import type { Props } from './Types'

import { Container, Image, Content, Name, Button } from './Styles'

const Card: FC<Props> = ({
	imagePath,
	imageAlt,
	imageSource,
	id,
	name,
	onBeforeClick,
}) => {
	const { SetSelectedArticleId } = useContext(PagesContext)

	const OnClick = () => {
		if (onBeforeClick) onBeforeClick()

		SetSelectedArticleId(id)
	}

	return (
		<Container>
			<Image
				title={`Sumber: ${imageSource}`}
				src={imagePath}
				alt={imageAlt}
			/>
			<Content>
				<Name>{name}</Name>
				<Button onClick={OnClick}>Baca selengkapnya</Button>
			</Content>
		</Container>
	)
}

export default Card
