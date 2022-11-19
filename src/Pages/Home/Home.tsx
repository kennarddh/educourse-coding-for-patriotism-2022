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
import People from 'Constants/People'

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
					{Object.entries(People).map(([id, value]) => (
						<Card
							key={id}
							imagePath={value.image}
							imageAlt={`${value.name} Portrait`}
							imageSource={value.imageSource}
							id='42a9b509-8915-4986-b8c8-5e4be5ffcf6a'
							name={value.name}
						/>
					))}
				</Cards>
			</Content>
		</>
	)
}

export default App
