const LocationLookup = {
	Aceh: { lat: 4.695135, lng: 96.7493993, title: 'Aceh' },
	SumateraUtara: { lat: 2.1153547, lng: 99.5450974, title: 'Sumatera Utara' },
	SumateraBarat: {
		lat: -0.7399397,
		lng: 100.8000051,
		title: 'Sumatera Barat',
	},
	Riau: { lat: 0.2933469, lng: 101.7068294, title: 'Riau' },
	Jambi: { lat: -1.4851831, lng: 102.4380581, title: 'Jambi' },
	SumateraSelatan: {
		lat: -3.3194374,
		lng: 103.914399,
		title: 'Sumatera Selatan',
	},
	Bengkulu: { lat: -3.5778471, lng: 102.3463875, title: 'Bengkulu' },
	Lampung: { lat: -4.5585849, lng: 105.4068079, title: 'Lampung' },
	KepulauanBangkaBelitung: {
		lat: -2.7410513,
		lng: 106.4405872,
		title: 'Kepulauan Bangka Belitung',
	},
	KepulauanRiau: {
		lat: 3.9456514,
		lng: 108.1428669,
		title: 'Kepulauan Riau',
	},
	DKIJakarta: { lat: -6.211544, lng: 106.845172, title: 'DKI Jakarta' },
	JawaBarat: { lat: -7.090911, lng: 107.668887, title: 'Jawa Barat' },
	JawaTengah: { lat: -7.150975, lng: 110.1402594, title: 'Jawa Tengah' },
	DIYogyakarta: {
		lat: -7.8753849,
		lng: 110.4262088,
		title: 'Daerah Istimewa Yogyakarta',
	},
	JawaTimur: { lat: -7.5360639, lng: 112.2384017, title: 'Jawa Timur' },
	Banten: { lat: -6.4058172, lng: 106.0640179, title: 'Banten' },
	Bali: { lat: -8.4095178, lng: 115.188916, title: 'Bali' },
	NusaTenggaraBarat: {
		lat: -8.6529334,
		lng: 117.3616476,
		title: 'Nusa Tenggara Barat',
	},
	NusaTenggaraTimur: {
		lat: -8.6573819,
		lng: 121.0793705,
		title: 'Nusa Tenggara Timur',
	},
	KalimantanBarat: {
		lat: -0.2787808,
		lng: 111.4752851,
		title: 'Kalimantan Barat',
	},
	KalimantanTengah: {
		lat: -1.6814878,
		lng: 113.3823545,
		title: 'Kalimantan Tengah',
	},
	KalimantanSelatan: {
		lat: -3.0926415,
		lng: 115.2837585,
		title: 'Kalimantan Selatan',
	},
	KalimantanTimur: {
		lat: 1.6406296,
		lng: 116.419389,
		title: 'Kalimantan Timur',
	},
	SulawesiUtara: {
		lat: 0.6246932,
		lng: 123.9750018,
		title: 'Sulawesi Utara',
	},
	SulawesiTengah: {
		lat: -1.4300254,
		lng: 121.4456179,
		title: 'Sulawesi Tengah',
	},
	SulawesiSelatan: {
		lat: -3.6687994,
		lng: 119.9740534,
		title: 'Sulawesi Selatan',
	},
	SulawesiTenggara: {
		lat: -4.14491,
		lng: 122.174605,
		title: 'Sulawesi Tenggara',
	},
	Gorontalo: { lat: 0.6999372, lng: 122.4467238, title: 'Gorontalo' },
	SulawesiBarat: {
		lat: -2.8441371,
		lng: 119.2320784,
		title: 'Sulawesi Barat',
	},
	Maluku: { lat: -3.2384616, lng: 130.1452734, title: 'Maluku' },
	MalukuUtara: { lat: 1.5709993, lng: 127.8087693, title: 'Maluku Utara' },
	PapuaBarat: { lat: -1.3361154, lng: 133.1747162, title: 'Papua Barat' },
	Papua: { lat: -4.269928, lng: 138.0803529, title: 'Papua' },
} as const

export default LocationLookup

export type ILocationLookup = typeof LocationLookup
