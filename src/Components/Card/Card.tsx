import { FC } from 'react'

import type { Props } from './Types'

import { Container, Image, Content, Name, Button } from './Styles'

const Card: FC<Props> = ({ imagePath, imageAlt, id, name }) => {
	return (
		<Container>
			<Image src={imagePath} alt={imageAlt} />
			<Content>
				<Name>{name}</Name>
				<Button>Baca selengkapnya</Button>
			</Content>
		</Container>
	)
}

export default Card
