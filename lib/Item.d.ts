import { ReactElement } from "react";
export interface IItem<T extends {} = any> {
    children: ReactElement;
    data: T;
    disabled?: boolean;
}
declare const Item: <T extends {} = any>({ children, data, disabled }: IItem<T>) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export default Item;
