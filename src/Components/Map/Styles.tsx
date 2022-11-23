import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 500px;

	display: flex;
	justify-content: center;

	margin-bottom: 48px;
`

export const Wrapper = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	gap: 10px;

	flex-direction: column;
`

export const Title = styled.p`
	color: #ff731d;

	font-style: normal;
	font-weight: 800;
	font-size: 30px;
	text-align: center;

	@media only screen and (max-width: 400px) {
		font-size: 25px;
	}
`
