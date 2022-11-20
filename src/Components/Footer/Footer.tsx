import { FC } from 'react'

import { Container, EducourseLogo, Text, Wrapper } from './Styles'

const Footer: FC = () => {
	return (
		<Wrapper>
			<Container>
				<EducourseLogo src='EducourseLogo.png' />
				<Text>Dibuat dengan Typescript dan React JS.</Text>
			</Container>
		</Wrapper>
	)
}

export default Footer
