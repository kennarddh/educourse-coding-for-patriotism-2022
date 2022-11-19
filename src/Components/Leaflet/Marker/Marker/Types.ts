import { LatLng } from 'leaflet'

export interface Props {
	draggable: boolean
	position: Pick<LatLng, 'lat' | 'lng'>
}
