import styled from 'styled-components'

import { IModalContainer } from './Types'

export const ModalContainer = styled.div<IModalContainer>`
	background-color: ${({ backgroundColor }) => backgroundColor};

	position: absolute;
	top: ${() => window.scrollY}px;
	left: 0;
	right: 0;
	bottom: ${() => window.scrollY * -1}px;

	display: flex;
	justify-content: center;
	align-items: center;
`

ModalContainer.defaultProps = {
	backgroundColor: '#b4b4b4a4',
}
