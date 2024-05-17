import { ReactElement, type HTMLAttributes, type ReactFragment } from "react";
import type { IMenuItem } from "./MenuItem";
interface IMenu extends HTMLAttributes<HTMLUListElement> {
    children: ReactElement<IMenuItem>[] | ReactElement<IMenuItem> | ReactFragment;
}
declare const Menu: ({ children, ...props }: IMenu) => import("react/jsx-runtime").JSX.Element;
export default Menu;
