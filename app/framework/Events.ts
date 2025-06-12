import { BufferGeometry, Vector3 } from "three";

export type FrameworkEventType =
  (typeof FrameworkEvents)[keyof typeof FrameworkEvents];

export const FrameworkEvents = {
  EntitySelected: "EntitySelected",
  SceneClicked: "SceneClicked",
  SceneUpdated: "SceneUpdated",
  StatusMessage: "StatusMessage",
} as const;

export type FrameworkEventPayloads = {
  [FrameworkEvents.EntitySelected]: { guid: string };
  [FrameworkEvents.SceneClicked]: { point: Vector3 }; //TODO
  [FrameworkEvents.SceneUpdated]: { geometry: BufferGeometry };
  [FrameworkEvents.StatusMessage]: { message: string };
};
