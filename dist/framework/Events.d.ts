import { BufferGeometry, Vector3 } from "three";
export type FrameworkEventType = (typeof FrameworkEvents)[keyof typeof FrameworkEvents];
export declare const FrameworkEvents: {
    readonly EntitySelected: "EntitySelected";
    readonly SceneClicked: "SceneClicked";
    readonly SceneUpdated: "SceneUpdated";
    readonly StatusMessage: "StatusMessage";
};
export type FrameworkEventPayloads = {
    [FrameworkEvents.EntitySelected]: {
        guid: string;
    };
    [FrameworkEvents.SceneClicked]: {
        point: Vector3;
    };
    [FrameworkEvents.SceneUpdated]: {
        geometry: BufferGeometry;
    };
    [FrameworkEvents.StatusMessage]: {
        message: string;
    };
};
