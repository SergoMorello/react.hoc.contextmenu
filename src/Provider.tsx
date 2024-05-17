import {
	useRef,
	type ReactNode
} from "react";
import {
	ProviderRef
} from "./ContainerContext";

interface IProvider {
	children: ReactNode;
};

const Provider = ({children}: IProvider) => {
	return(<>
		{children}
		<div ref={ProviderRef}/>
	</>);
};

export default Provider;