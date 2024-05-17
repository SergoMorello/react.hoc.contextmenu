import {
	type ReactNode,
	type MouseEvent,
	useContext,
	useRef,
	useState,
	useEffect
} from "react";
import {
	createPortal
} from "react-dom";
import ContainerContext,{
	ProviderRef
} from "./ContainerContext";

import styles from "./style.module.scss";

export interface IContainer {
	children: ReactNode;
	menuComponent?: (data: any) => ReactNode;
};

const Container = ({children, menuComponent}: IContainer) => {
	const [isShow, setShow] = useState(false);
	const menuContainerRef = useRef<HTMLDialogElement>(null);
	const menuPosition = useRef({
		x: 0,
		y: 0
	});
	const itemData = useRef<any>();
	const providerContext = useContext(ContainerContext);

	const show = (e: MouseEvent, data: any) => {
		menuPosition.current = {
			x: e.clientX,
			y: e.clientY
		};
		itemData.current = data;
		setShow(true);
	};

	const _hide = (e: MouseEvent) => {
		if ((e.target as HTMLDialogElement).closest('.' + styles['menu-container'])) return;
		hide();
	};

	const hide = () => {
		setShow(false);
	};

	useEffect(() => {
		if (!menuContainerRef.current) return;

		if (isShow) {
			menuContainerRef.current.style.top = menuPosition.current.y + 'px';
			menuContainerRef.current.style.left = menuPosition.current.x + 'px';
			menuContainerRef.current.showModal();
		}else{
			menuContainerRef.current.close();
		}
	}, [isShow]);

	if (!ProviderRef.current) return null;

	return(<ContainerContext.Provider value={{
		show,
		hide
	}}>
	{children}
	{isShow && createPortal(
		<dialog className={styles['dialog']} onClick={_hide} ref={menuContainerRef}>
			<div className={styles['menu-container']}>
				{typeof menuComponent === 'function' ? menuComponent(itemData.current) : menuComponent}
			</div>
		</dialog>
		,
		ProviderRef.current as Element
	)}
	</ContainerContext.Provider>);
};

export default Container;