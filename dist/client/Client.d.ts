import type { ViewerAPI } from "~/framework/ViewerAPI";
import { AbstractClient } from "./AbstractClient";
export default class Client extends AbstractClient {
    #private;
    constructor(framework: ViewerAPI);
    protected init(): void;
    createWall(): void;
}
