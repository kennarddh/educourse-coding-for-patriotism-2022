import { ReactNode, JSXElementConstructor, ComponentProps } from 'react'

export interface IModalContainer {
	backgroundColor: string
}

export interface Props<
	T extends
		| JSXElementConstructor<any> // eslint-disable-line @typescript-eslint/no-explicit-any
		| keyof JSX.IntrinsicElements = JSXElementConstructor<any> // eslint-disable-line @typescript-eslint/no-explicit-any
> {
	wrapperId: string
	containerProps: IModalContainer
	children: ReactNode
	ModalContent: T
	contentProps: ComponentProps<T>
}
