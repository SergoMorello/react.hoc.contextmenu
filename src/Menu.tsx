import {
	ReactElement,
	ReactNode,
	type HTMLAttributes,
	type ReactFragment
} from "react";
import type {
	IMenuItem
} from "./MenuItem";
import styles from "./style.module.scss";

interface IMenu extends HTMLAttributes<HTMLUListElement> {
	children: ReactElement<IMenuItem>[] | ReactElement<IMenuItem> | ReactFragment;
};

const Menu = ({children, ...props}: IMenu) => {

	const classes = [styles['menu']];
	if (props.className) classes.push(props);

	return(<ul {...props} className={classes.join(' ')}>
		{children}
	</ul>);
};

export default Menu;