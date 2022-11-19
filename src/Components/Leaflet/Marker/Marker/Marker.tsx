import { FC, useRef } from 'react'

import { Marker as LeafletMarker, Popup } from 'react-leaflet'

import { LeafletEventHandlerFnMap, Marker as ILeafletMarker } from 'leaflet'

import DefaultIcon from 'Components/Leaflet/Marker/Default/Default'

import type { Props } from './Types'

const Marker: FC<Props> = ({
	draggable = false,
	position = { lat: 0, lng: 0 },
}) => {
	const MarkerRef = useRef<ILeafletMarker>(null)

	let events: LeafletEventHandlerFnMap = {}

	if (draggable) {
		events = {
			dragend() {
				console.log(MarkerRef?.current?.getLatLng())
			},
		}
	}

	return (
		<LeafletMarker
			draggable={draggable}
			position={position}
			icon={DefaultIcon}
			{...(draggable ? { eventHandlers: events } : {})}
			ref={MarkerRef}
		>
			<Popup>You are here</Popup>
		</LeafletMarker>
	)
}

export default Marker
