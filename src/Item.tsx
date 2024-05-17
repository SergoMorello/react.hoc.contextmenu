import {
	ReactElement,
	cloneElement,
	useCallback,
	useContext,
	type MouseEvent
} from "react";
import ContainerContext from "./ContainerContext";

export interface IItem<T extends {} = any> {
	children: ReactElement;
	data: T;
	disabled?: boolean;
};

const Item = <T extends {} = any>({children, data, disabled}: IItem<T>) => {
	const {show} = useContext(ContainerContext);

	const onContextMenu = useCallback((e: MouseEvent) => {
		if (disabled) return;
		show(e, data);
	}, [data, disabled]);

	return(cloneElement(children, {onContextMenu}));
};

export default Item;