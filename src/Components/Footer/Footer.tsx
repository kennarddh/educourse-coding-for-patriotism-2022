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
				<Text>Dibuat oleh Kennard Deven Huang</Text>
				<Text>
					Email:{' '}
					<Text as='a' href='mailto:kennarddevenh@gmail.com'>
						kennarddevenh@gmail.com
					</Text>
				</Text>
			</Container>
		</Wrapper>
	)
}

export default Footer
