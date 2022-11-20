import { FC } from 'react'

import { MapContainer, TileLayer } from 'react-leaflet'

import Marker from 'Components/Leaflet/Marker/Marker/Marker'

import People from 'Constants/People'
import LocationLookup from 'Constants/LocationLookup'

import 'leaflet/dist/leaflet.css'

import { Container } from './Styles'
import type { Props } from './Types'

const Map: FC<Props> = ({ onMarkerClick }) => {
	return (
		<Container>
			<MapContainer
				dragging
				center={[-1, 117.24809093207894]}
				zoom={5}
				doubleClickZoom={false}
				style={{
					width: '95%',
					height: '100%',
				}}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				{Object.entries(People).map(([id, person]) => (
					<Marker
						key={id}
						id={person.origin}
						position={LocationLookup[person.origin]}
						onClick={onMarkerClick}
					/>
				))}
			</MapContainer>
		</Container>
	)
}

export default Map
