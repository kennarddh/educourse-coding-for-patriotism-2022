import { FC } from 'react'

import {
	Header,
	Wave,
	HeaderContent,
	Title,
	HeaderImage,
	HeaderContaienr,
} from './Styles'

const App: FC = () => {
	return (
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
	)
}

export default App
