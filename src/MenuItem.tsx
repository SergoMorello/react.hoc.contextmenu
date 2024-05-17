import {
	useContext,
	type HTMLAttributes,
	type MouseEvent
} from "react";
import styles from "./style.module.scss";
import ContainerContext from "./ContainerContext";

export interface IMenuItem extends HTMLAttributes<HTMLLIElement> {
	disabled?: boolean;
	active?: boolean;
	icon?: string;
};

const MenuItem = ({disabled, children, active, icon, ...props}: IMenuItem) => {
	const containerContext = useContext(ContainerContext);

	const handleClick = (e: MouseEvent<HTMLLIElement>) => {
		if (disabled) return;
		if (typeof props.onClick === 'function') {
			props.onClick(e);
		}
		containerContext.hide();
	};

	const classes = [styles['item']];
	if (disabled) classes.push(styles['disabled']);
	if (active) classes.push(styles['active']);
	if (props.className) classes.push(props.className);

	return(<li {...props} className={classes.join(' ')} onClick={handleClick}>
		{Boolean(icon) && <div className={styles['icon']}>{icon}</div>}
		<div className={styles['content']}>{children}</div>
	</li>);
};

export default MenuItem;