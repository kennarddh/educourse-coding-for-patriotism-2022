import { FC, useRef, useState, useEffect } from 'react'

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
	AboutUsContainer,
	AboutUsTitle,
	AboutUsContent,
} from './Styles'

import Card from 'Components/Card/Card'
import People from 'Constants/People'
import LocationLookup from 'Constants/LocationLookup'
import Modal, { IModalHandle } from 'Components/Modal/Modal'
import Footer from 'Components/Footer/Footer'
import BackToTop from 'Components/BackToTop/BackToTop'
import useTitle from 'Hooks/useTitle'

import Map from 'Components/Map/Map'
import QuizIcon from 'Components/QuizIcon/QuizIcon'

const Home: FC = () => {
	const ModalRef = useRef<IModalHandle>(null)

	useTitle('Beranda')

	const [SelectedProvince, SetSelectedProvince] = useState<string | null>(
		null
	)

	const [, SetDimensions] = useState<number>(0)

	const OnMapMarkerClick = (province: string) => {
		SetSelectedProvince(province)

		ModalRef?.current?.Open()
	}

	const OnCloseModal = () => {
		SetSelectedProvince(null)

		ModalRef?.current?.Close()
	}

	useEffect(() => {
		const HandleResize = () => {
			SetDimensions(Math.random())
		}

		window.addEventListener('resize', HandleResize)

		return () => window.removeEventListener('resize', HandleResize)
	}, [])

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
				<AboutUsContainer>
					<AboutUsTitle>About Us</AboutUsTitle>
					<AboutUsContent>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Quaerat aut vero inventore nemo quia ex optio sunt
						totam quas incidunt deserunt dolore soluta suscipit
						neque repudiandae, iusto similique corporis eos culpa!
						Quo distinctio vel tempora ratione inventore saepe
						quidem expedita odio ex facere voluptate, nobis sed
						officiis similique adipisci iusto fugit veritatis
						molestiae repudiandae perspiciatis earum cum! Ipsum sed
						ipsam iusto delectus officia aliquid dignissimos,
						mollitia odit doloribus dicta voluptate aliquam
						consectetur debitis doloremque reiciendis quos! Modi
						distinctio tempore quibusdam magni deleniti ipsam
						aliquam perspiciatis ut consectetur natus doloremque
						quisquam nam eveniet cupiditate, quos fugiat, voluptas
						mollitia, hic eius voluptatem.
					</AboutUsContent>
				</AboutUsContainer>
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
						{
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							(LocationLookup as any)[
								SelectedProvince ?? 'JawaBarat'
							]?.title
						}
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
								onBeforeClick={() => ModalRef?.current?.Close()}
							/>
						))}
				</ModalCards>
			</Modal>
			<Footer />
			<BackToTop />
			<QuizIcon />
		</>
	)
}

export default Home
