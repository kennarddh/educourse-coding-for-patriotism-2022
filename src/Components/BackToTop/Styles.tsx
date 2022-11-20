import styled from 'styled-components'

export const Container = styled.button`
	position: fixed;
	bottom: 25px;
	right: 25px;

	border-radius: 50%;

	width: 50px;
	height: 50px;

	z-index: 999;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: transparent;

	cursor: pointer;

	border: 5px solid #1746a2;
`

export const Arrow = styled.div`
	--size: 5px;

	border: solid #1746a2;
	border-width: 0 var(--size) var(--size) 0;

	display: inline-block;

	padding: var(--size);

	transform: rotate(-135deg);
`
