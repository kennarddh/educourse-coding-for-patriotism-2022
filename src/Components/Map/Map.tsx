import { FC } from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'

import Marker from 'Components/Leaflet/Marker/MoveableMarker/MoveableMarker'

import 'leaflet/dist/leaflet.css'

import { Container } from './Styles'

const Map: FC = () => {
	return (
		<Container>
			<MapContainer
				center={[-2.4492049339511506, 114.10591405080922]}
				zoom={5}
				scrollWheelZoom
				style={{
					width: '80%',
					height: '100%',
				}}
				minZoom={5}
				maxZoom={5}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker />
			</MapContainer>
		</Container>
	)
}

export default Map
