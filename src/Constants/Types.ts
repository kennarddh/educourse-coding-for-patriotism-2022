export interface IAnswer {
	id: string
	value: string
}

export type IAnswers = IAnswer[]

/**
 * IQuizQuestion interface
 *
 * @interface IQuizQuestion
 * @member {number} time Time limit to answer is seconds
 */
export interface IQuizQuestion {
	question: string
	correctAnswer: string
	answers: IAnswers
	time: number
}

export interface IQuiz {
	[key: string]: IQuizQuestion
}
