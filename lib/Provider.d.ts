import { type ReactNode } from "react";
interface IProvider {
    children: ReactNode;
}
declare const Provider: ({ children }: IProvider) => import("react/jsx-runtime").JSX.Element;
export default Provider;
