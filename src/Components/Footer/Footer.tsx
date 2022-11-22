import { FC } from 'react'

import { Container, EducourseLogo, Text, Wrapper } from './Styles'

const Footer: FC = () => {
	return (
		<Wrapper>
			<Container>
				<EducourseLogo src='EducourseLogo.png' />
				<Text>Dibuat dengan Typescript dan React JS.</Text>
				<Text
					as='a'
					href='https://www.flaticon.com/free-icons/quiz'
					title='quiz icons'
				>
					Quiz icons created by Freepik - Flaticon
				</Text>
				<Text
					as='a'
					href='https://www.flaticon.com/free-icons/delete'
					title='delete icons'
				>
					Delete icons created by Kiranshastry - Flaticon
				</Text>
			</Container>
		</Wrapper>
	)
}

export default Footer
