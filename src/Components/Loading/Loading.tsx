import { FC } from 'react'

import { Container, LoadingRing } from './Styles'

const Loading: FC = () => {
	return (
		<Container>
			<LoadingRing size={100} />
		</Container>
	)
}

export default Loading
