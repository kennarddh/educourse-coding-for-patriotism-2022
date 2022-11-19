import { FC } from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'

import Marker from 'Components/Leaflet/Marker/MoveableMarker/MoveableMarker'

import 'leaflet/dist/leaflet.css'

import { Container } from './Styles'

const Map: FC = () => {
	return (
		<Container>
			<MapContainer
				dragging={false}
				center={[-1, 117.24809093207894]}
				zoom={5}
				scrollWheelZoom
				style={{
					width: '90%',
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
