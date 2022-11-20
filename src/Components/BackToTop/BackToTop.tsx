import { FC } from 'react'

import { Arrow, Container } from './Styles'

const BackToTop: FC = () => {
	const OnClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<Container onClick={OnClick}>
			<Arrow />
		</Container>
	)
}

export default BackToTop
