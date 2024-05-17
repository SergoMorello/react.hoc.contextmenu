import { type ReactNode } from "react";
export interface IContainer {
    children: ReactNode;
    menuComponent?: (data: any) => ReactNode;
}
declare const Container: ({ children, menuComponent }: IContainer) => import("react/jsx-runtime").JSX.Element | null;
export default Container;
