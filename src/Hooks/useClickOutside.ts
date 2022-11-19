import { useCallback, useEffect, MutableRefObject } from 'react'

const useClickOutside = (
	ref: MutableRefObject<HTMLDivElement | undefined>,
	onClickOutsideCallback: () => void
) => {
	const CheckClickOutside = useCallback(
		(event: MouseEvent) => {
			if (!ref.current) return

			if (ref.current?.contains(event.target as Node)) return

			if (ref.current === event.target) return

			onClickOutsideCallback()
		},
		[ref, onClickOutsideCallback]
	)

	useEffect(() => {
		document.addEventListener('mousedown', CheckClickOutside)

		return () => {
			document.removeEventListener('mousedown', CheckClickOutside)
		}
	}, [ref, CheckClickOutside])
}

export default useClickOutside
