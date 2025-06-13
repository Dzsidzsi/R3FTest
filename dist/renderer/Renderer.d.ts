import type { ViewerAPI } from "../framework/ViewerAPI";
export default function Renderer({ framework: ViewerAPI, }: {
    framework: ViewerAPI;
}): import("react/jsx-runtime").JSX.Element;
