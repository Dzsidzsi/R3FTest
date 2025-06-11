export type FrameworkEventType =
  (typeof FrameworkEvents)[keyof typeof FrameworkEvents];

export const FrameworkEvents = {
  EntitySelected: Symbol("EntitySelected"),
} as const;

export type FrameworkEventPayloads = {
  [FrameworkEvents.EntitySelected]: { guid: string };
};
