import {
	type FC
} from "react";
import Container,{
	type IContainer
} from "./Container";
import Item,{
	type IItem
} from "./Item";

const ContextMenu = <T extends {} = any>(menuComponent?: FC<{data: T}>) => {

	return {
		Container: (props: IContainer) => <Container {...props} menuComponent={menuComponent ?? props.menuComponent}/>,
		Item: (props: IItem<T>) => <Item {...props}/>
	};
};

export default ContextMenu;