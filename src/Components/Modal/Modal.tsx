import { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

import useClickOutside from 'Hooks/useClickOutside'

import { ModalContainer } from './Styles'

import type { Props, IModalHandle } from './Types'

const Modal = forwardRef<IModalHandle, Props>(
	(
		{ wrapperId, containerProps, contentProps, children, ModalContent },
		ref
	) => {
		const [IsOpen, SetIsOpen] = useState(false)

		const ModalContentRef = useRef<HTMLDivElement>()

		const OnClickOutside = () => {
			document
				.querySelector('#root')
				?.setAttribute('aria-hidden', 'false')

			document
				.querySelectorAll(
					'#root :where(button,a,div.leaflet-container,img.leaflet-marker-icon)'
				)
				.forEach(el => {
					el.classList.remove('disabled')
					el.setAttribute('tabindex', '0')
				})

			document.body.style.overflow = ''

			SetIsOpen(false)
		}

		useClickOutside(ModalContentRef, OnClickOutside)

		useImperativeHandle(ref, () => ({
			Open() {
				document
					.querySelector('#root')
					?.setAttribute('aria-hidden', 'true')

				document
					.querySelectorAll(
						'#root :where(button,a,div.leaflet-container,img.leaflet-marker-icon)'
					)
					.forEach(el => {
						el.classList.add('disabled')
						el.setAttribute('tabindex', '-1')
					})

				document.body.style.overflow = 'hidden'

				SetIsOpen(true)
			},
			Close() {
				document
					.querySelector('#root')
					?.setAttribute('aria-hidden', 'false')

				document
					.querySelectorAll(
						'#root :where(button,a,div.leaflet-container,img.leaflet-marker-icon)'
					)
					.forEach(el => {
						el.classList.remove('disabled')
						el.setAttribute('tabindex', '0')
					})

				document.body.style.overflow = ''

				SetIsOpen(false)
			},
		}))

		return (
			<ReactPortal wrapperId={wrapperId}>
				{IsOpen && (
					<ModalContainer {...containerProps}>
						<ModalContent ref={ModalContentRef} {...contentProps}>
							{children}
						</ModalContent>
					</ModalContainer>
				)}
			</ReactPortal>
		)
	}
)

Modal.displayName = 'Modal'

export default Modal

export { IModalHandle }
