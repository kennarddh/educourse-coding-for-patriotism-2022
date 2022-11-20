import { FC, useRef, useState } from 'react'

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
import LocationLookup from 'Constants/LocationLookup'
import Modal, { IModalHandle } from 'Components/Modal/Modal'
import Footer from 'Components/Footer/Footer'
import BackToTop from 'Components/BackToTop/BackToTop'

import Map from 'Components/Map/Map'

const Home: FC = () => {
	const ModalRef = useRef<IModalHandle>(null)

	const [SelectedProvince, SetSelectedProvince] = useState<string | null>(
		null
	)

	const OnMapMarkerClick = (province: string) => {
		SetSelectedProvince(province)

		ModalRef?.current?.Open()
	}

	const OnCloseModal = () => {
		SetSelectedProvince(null)

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
					<ModalTitle>
						{LocationLookup[SelectedProvince ?? '']?.title}
					</ModalTitle>
					<ModalCloseButton onClick={OnCloseModal}>
						Tutup
					</ModalCloseButton>
				</ModalHeader>
				<ModalCards>
					{Object.entries(People)
						.filter(
							([, person]) => person.origin === SelectedProvince
						)
						.map(([id, value]) => (
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
			<Footer />
			<BackToTop />
		</>
	)
}

export default Home
