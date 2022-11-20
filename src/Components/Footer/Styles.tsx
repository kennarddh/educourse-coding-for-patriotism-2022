import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	background-color: #5f9df7;
	padding-bottom: 20px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media only screen and (max-width: 700px) {
		padding-bottom: 40px;
	}
`

export const EducourseLogo = styled.img`
	width: 30%;

	@media only screen and (max-width: 700px) {
		width: 80%;
	}
`

export const Text = styled.p`
	color: #fff7e9;
	font-size: 20px;
	font-weight: 600;
	padding: 0 0 50px 0;

	@media only screen and (max-width: 700px) {
		padding: 0;
	}
`
