import { FC } from 'react'

import { Arrow, Container } from './Styles'

const BackToTop: FC = () => {
	const OnClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<Container onClick={OnClick} title='Kembali ke atas'>
			<Arrow />
		</Container>
	)
}

export default BackToTop
