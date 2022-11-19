import { FC } from 'react'

import {
	Header,
	Wave,
	HeaderContent,
	Title,
	HeaderImage,
	HeaderContaienr,
	Cards,
	Content,
} from './Styles'

import Card from 'Components/Card/Card'

const App: FC = () => {
	return (
		<>
			<Header>
				<HeaderContaienr>
					<HeaderContent>
						<Title>Sejarah Pahlawan Daerah</Title>
						<HeaderImage
							src='HomeThumbnail.jpg'
							alt='Thumbnail Dr. Ir. H. Soekarno'
						/>
					</HeaderContent>
				</HeaderContaienr>
				<Wave src='Waves/HomeWave.png' alt='Wave' />
			</Header>
			<Content>
				<Cards>
					<Card
						imagePath='People/Soekarno.jpg'
						imageAlt='Soekarno Portrait'
						id='42a9b509-8915-4986-b8c8-5e4be5ffcf6a'
						name='Dr. Ir. H. Soekarno'
					/>
				</Cards>
			</Content>
		</>
	)
}

export default App
