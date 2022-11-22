export interface IAnswer {
	id: string
	value: string
}

export type IAnswers = IAnswer[]

export interface IQuizQuestion {
	question: string
	correctAnswer: string
	answers: IAnswers
}

export interface IQuiz {
	[key: string]: IQuizQuestion
}
