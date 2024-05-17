import {
	type RefObject,
	type MouseEvent,
	createContext,
	createRef
} from "react"

const ProviderRef = createRef<HTMLDivElement>();

const ContainerContext = createContext({
	show: (e: MouseEvent, data: any) => {},
	hide: () => {}
});

export {
	ProviderRef
};

export default ContainerContext;