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
			document.body.style.overflow = ''

			SetIsOpen(false)
		}

		useClickOutside(ModalContentRef, OnClickOutside)

		useImperativeHandle(ref, () => ({
			Open() {
				document.body.style.overflow = 'hidden'

				SetIsOpen(true)
			},
			Close() {
				document.body.style.overflow = 'unset'

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
