export type IAnswers = string[]

/**
 * IQuizQuestion interface
 *
 * @interface IQuizQuestion
 * @member {number} time Time limit to answer is seconds
 */
export interface IQuizQuestion {
	question: string
	answers: IAnswers
	time: number
}

export interface IQuiz {
	[key: string]: IQuizQuestion
}
