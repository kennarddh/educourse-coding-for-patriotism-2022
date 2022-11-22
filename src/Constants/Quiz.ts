import { IQuiz } from './Types'

// First answer always correct
const Quiz: IQuiz = {
	'56b9c90d-857c-4b40-bcd8-1b38ba88799d': {
		question: 'Dr. Ir. H. Soekano berasal dari?',
		time: 10,
		answers: new Set([
			'Jawa Timur',
			'Jawa Barat',
			'Aceh',
			'Kalimantan Timur',
		]),
	},
	'834a30c8-c31b-450f-aecf-04134daea65f': {
		question: 'Kapan Indonesia merdeka?',
		time: 5,
		answers: new Set([
			'17 Agustus 1945',
			'17 Agustus 1954',
			'16 Agustus 1945',
			'16 Agustus 1954',
		]),
	},
}

export default Quiz
