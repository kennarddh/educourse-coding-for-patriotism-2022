import { FC, useRef } from 'react'

import {
	Header,
	Wave,
	HeaderContent,
	Title,
	HeaderImage,
	HeaderContaienr,
	Cards,
	Content,
	ModalContent,
	ModalCards,
	ModalHeader,
	ModalTitle,
	ModalCloseButton,
} from './Styles'

import Card from 'Components/Card/Card'
import People from 'Constants/People'
import Modal, { IModalHandle } from 'Components/Modal/Modal'

import Map from 'Components/Map/Map'

const App: FC = () => {
	const ModalRef = useRef<IModalHandle>(null)

	const OnMapMarkerClick = () => {
		ModalRef?.current?.Open()
	}

	const OnCloseModal = () => {
		ModalRef?.current?.Close()
	}

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
				<Map onMarkerClick={OnMapMarkerClick} />
				<Cards>
					{Object.entries(People).map(([id, value]) => (
						<Card
							key={id}
							imagePath={value.image}
							imageAlt={`${value.name} Portrait`}
							imageSource={value.imageSource}
							id={id}
							name={value.name}
						/>
					))}
				</Cards>
			</Content>
			<Modal
				wrapperId='content-modal'
				containerProps={{ backgroundColor: '#5F9DF780', zIndex: 9998 }}
				ModalContent={ModalContent}
				ref={ModalRef}
			>
				<ModalHeader>
					<ModalTitle>Jawa Timur</ModalTitle>
					<ModalCloseButton onClick={OnCloseModal}>
						Tutup
					</ModalCloseButton>
				</ModalHeader>
				<ModalCards>
					{Object.entries(People).map(([id, value]) => (
						<Card
							key={id}
							imagePath={value.image}
							imageAlt={`${value.name} Portrait`}
							imageSource={value.imageSource}
							id={id}
							name={value.name}
						/>
					))}
				</ModalCards>
			</Modal>
		</>
	)
}

export default App
