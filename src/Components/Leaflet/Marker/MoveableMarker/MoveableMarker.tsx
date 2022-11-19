import { FC, useRef } from 'react'

import { Marker as LeafletMarker, Popup } from 'react-leaflet'

import { LeafletEventHandlerFnMap, Marker } from 'leaflet'

import DefaultIcon from 'Components/Leaflet/Marker/Default/Default'

const MoveableMarker: FC = () => {
	const MarkerRef = useRef<Marker>(null)

	const events: LeafletEventHandlerFnMap = {
		dragend() {
			console.log(MarkerRef?.current?.getLatLng())
		},
	}

	return (
		<LeafletMarker
			draggable={true}
			position={{ lat: -6.315298538330033, lng: 110.03907962519779 }}
			icon={DefaultIcon}
			eventHandlers={events}
			ref={MarkerRef}
		>
			<Popup>You are here</Popup>
		</LeafletMarker>
	)
}

export default MoveableMarker
