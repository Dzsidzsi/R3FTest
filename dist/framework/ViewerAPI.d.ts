import * as THREE from "three";
import { type FrameworkEventPayloads, type FrameworkEventType } from "./Events";
type EventCallback<T> = (payload: T) => void;
export declare class ViewerAPI {
    #private;
    protected listeners: Map<FrameworkEventType, Set<Function>>;
    on<T extends FrameworkEventType>(event: T, callback: EventCallback<FrameworkEventPayloads[T]>): void;
    off<T extends FrameworkEventType>(event: T, callback: EventCallback<FrameworkEventPayloads[T]>): void;
    /** @internal */ fire<T extends FrameworkEventType>(event: T, payload: FrameworkEventPayloads[T]): void;
    displayParameters(guid: string, parameters: Record<string, any>): void;
    Actions: {
        Selection: {
            PickPoints: (count: number) => Promise<THREE.Vector3[]>;
        };
    };
    AddEntities(json: string): void;
}
export {};
