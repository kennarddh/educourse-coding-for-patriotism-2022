import { FC } from 'react'

import { Container, Image, Content, Name, Button } from './Styles'

const Card: FC = () => {
	return (
		<Container>
			<Image src='People/Soekarno.jpg' alt='Soekarno Portrait' />
			<Content>
				<Name>Dr. Ir. H. Soekarno</Name>
				<Button>Baca selengkapnya</Button>
			</Content>
		</Container>
	)
}

export default Card
