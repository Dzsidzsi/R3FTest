import type {
  FrameworkEventPayloads,
  FrameworkEventType,
} from "./FrameworkEvents";

type EventCallback<T> = (payload: T) => void;

export class Framework {
  //#region Events
  private listeners = new Map<FrameworkEventType, Set<Function>>();
  on<T extends FrameworkEventType>(
    event: T,
    callback: EventCallback<FrameworkEventPayloads[T]>
  ) {
    if (!this.listeners.has(event)) this.listeners.set(event, new Set());
    this.listeners.get(event)!.add(callback);
  }

  off<T extends FrameworkEventType>(
    event: T,
    callback: EventCallback<FrameworkEventPayloads[T]>
  ) {
    this.listeners.get(event)?.delete(callback);
  }

  emit<T extends FrameworkEventType>(
    event: T,
    payload: FrameworkEventPayloads[T]
  ) {
    this.listeners
      .get(event)
      ?.forEach((cb) => (cb as EventCallback<any>)(payload));
  }
  //#endregion

  //TODO - geometry operations (merge, add, remove, update)
  
  displayParameters(guid: string, parameters: Record<string, any>) {
    console.log("Displaying parameters for", guid, parameters);
    // Could be hooked into your real parameter UI
  }

  // Example exposed action API
  actions = {
    SelectPoints: (
      count: number,
      callback: (/*points: THREE.Vector3[]*/) => void //TODO - add optional parameters
    ) => {
      console.warn("selectPoints is not implemented (stub)");
    },
  };

  // Example geometry insertion API
  ProcessJson(geometry: any[]) {
    console.log("Processing geometry", geometry);
    // Hook into engine scene insertion
  }
}
