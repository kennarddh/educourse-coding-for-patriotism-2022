import { FC } from 'react'

import { Container, EducourseLogo, Text } from './Styles'

const Footer: FC = () => {
	return (
		<Container>
			<EducourseLogo src='EducourseLogo.png' />
			<Text>Dibuat dengan Typescript dan React JS</Text>
		</Container>
	)
}

export default Footer
