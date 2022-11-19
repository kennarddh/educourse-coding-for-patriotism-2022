import { useState, useLayoutEffect, FC } from 'react'

import { createPortal } from 'react-dom'

import type { Props } from './Types'

const CreateWrapperAndAppendToBody = (wrapperId: string): HTMLDivElement => {
	const wrapperElement = document.createElement('div')

	wrapperElement.setAttribute('id', wrapperId)

	document.body.appendChild(wrapperElement)

	return wrapperElement
}

const ReactPortal: FC<Props> = ({
	children,
	wrapperId = 'react-portal-wrapper',
}) => {
	const [WrapperElement, SetWrapperElement] = useState<HTMLDivElement | null>(
		null
	)

	useLayoutEffect(() => {
		let element: HTMLDivElement = document.getElementById(
			wrapperId
		) as HTMLDivElement

		let isCreated = false

		// if element is not found with wrapperId or wrapperId is not provided,
		// create and append to body
		if (!element) {
			isCreated = true

			element = CreateWrapperAndAppendToBody(wrapperId)
		}

		SetWrapperElement(element)

		return () => {
			// delete the programatically created element
			if (!(isCreated && element.parentNode)) return

			element.parentNode.removeChild(element)
		}
	}, [wrapperId])

	// wrapperElement state will be null on very first render.
	if (WrapperElement === null) return null

	return createPortal(children, WrapperElement)
}

export default ReactPortal
