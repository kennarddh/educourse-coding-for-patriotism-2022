import { forwardRef, useImperativeHandle, useRef, useState, FC } from 'react'

import ReactPortal from 'Components/ReactPortal/ReactPortal'

import useClickOutside from 'Hooks/useClickOutside'

import { ModalContainer } from './Styles'

import type { Props } from './Types'

const Modal: FC<Props> = forwardRef(
	(
		{ wrapperId, containerProps, contentProps, children, ModalContent },
		ref
	) => {
		const [IsOpen, SetIsOpen] = useState(false)

		const ModalContentRef = useRef<HTMLDivElement>()

		const OnClickOutside = () => {
			document.body.style.overflow = 'unset'

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
