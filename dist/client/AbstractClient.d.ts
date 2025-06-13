import type { ViewerAPI } from "../framework/ViewerAPI";
export declare abstract class AbstractClient {
    protected ViewerAPI: ViewerAPI;
    constructor(framework: ViewerAPI);
    protected abstract init(): void;
}
