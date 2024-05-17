import { type FC } from "react";
import { type IContainer } from "./Container";
import { type IItem } from "./Item";
declare const ContextMenu: <T extends {} = any>(menuComponent?: FC<{
    data: T;
}>) => {
    Container: (props: IContainer) => import("react/jsx-runtime").JSX.Element;
    Item: (props: IItem<T>) => import("react/jsx-runtime").JSX.Element;
};
export default ContextMenu;
