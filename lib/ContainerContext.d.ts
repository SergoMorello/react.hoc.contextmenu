import { type RefObject, type MouseEvent } from "react";
declare const ProviderRef: RefObject<HTMLDivElement>;
declare const ContainerContext: import("react").Context<{
    show: (e: MouseEvent, data: any) => void;
    hide: () => void;
}>;
export { ProviderRef };
export default ContainerContext;
