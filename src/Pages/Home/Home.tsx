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
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</Cards>
			</Content>
		</>
	)
}

export default App
