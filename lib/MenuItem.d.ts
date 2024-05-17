import { type HTMLAttributes } from "react";
export interface IMenuItem extends HTMLAttributes<HTMLLIElement> {
    disabled?: boolean;
    active?: boolean;
    icon?: string;
}
declare const MenuItem: ({ disabled, children, active, icon, ...props }: IMenuItem) => import("react/jsx-runtime").JSX.Element;
export default MenuItem;
