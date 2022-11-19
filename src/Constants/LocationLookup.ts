import { LatLng } from 'leaflet'

const LocationLookup: Record<string, Pick<LatLng, 'lat' | 'lng'>> = {
	JawaTimur: { lat: -6.227933930268672, lng: 112.06061537579109 },
	SumatraBarat: { lat: 0.7031073524364909, lng: 100.19993630339773 },
	Aceh: { lat: 6.009459238059562, lng: 96.37818400810369 },
	Yogyakarta: { lat: -6.315298538330033, lng: 110.03907962519779 },
	SulawesiSelatan: { lat: -2.767477951092084, lng: 119.43969458267738 },
	Maluku: { lat: -3.337953961416472, lng: 129.8067467860038 },
	JawaTengah: { lat: -5.703447982149503, lng: 109.59978062697769 },
	JawaBarat: { lat: -5.134714634014442, lng: 106.96408938884389 },
}

export default LocationLookup
