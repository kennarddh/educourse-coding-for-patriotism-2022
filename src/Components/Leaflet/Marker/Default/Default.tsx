import Leaflet from 'leaflet'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const Default = Leaflet.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
	iconSize: [25, 40],
	shadowSize: [40, 40],
	iconAnchor: [12.5, 40],
})

export default Default
