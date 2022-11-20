import { FC, useRef } from 'react'

import { Marker as LeafletMarker } from 'react-leaflet'

import {
	LeafletEventHandlerFnMap,
	Marker as ILeafletMarker,
	LeafletKeyboardEvent,
} from 'leaflet'

import DefaultIcon from 'Components/Leaflet/Marker/Default/Default'

import type { Props } from './Types'

const Marker: FC<Props> = ({
	draggable = false,
	position = { lat: 0, lng: 0 },
	debug = false,
	id,
	onClick,
}) => {
	const MarkerRef = useRef<ILeafletMarker>(null)

	const events: LeafletEventHandlerFnMap = {}

	if (draggable && debug) {
		events.dragend = () => {
			console.log(MarkerRef?.current?.getLatLng())
		}
	}

	if (onClick) {
		events.click = () => {
			onClick(id)
		}

		events.keydown = (event: LeafletKeyboardEvent) => {
			if (event.originalEvent.key !== 'Enter') return

			onClick(id)
		}
	}

	return (
		<LeafletMarker
			draggable={draggable}
			position={position}
			icon={DefaultIcon}
			eventHandlers={events}
			ref={MarkerRef}
		></LeafletMarker>
	)
}

export default Marker
