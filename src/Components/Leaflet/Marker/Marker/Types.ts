import { LatLng } from 'leaflet'

export interface Props {
	draggable?: boolean
	debug?: boolean
	position?: Pick<LatLng, 'lat' | 'lng'>
}
