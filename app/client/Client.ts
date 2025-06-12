import type { ViewerAPI } from "~/framework/ViewerAPI";
import { AbstractClient } from "./AbstractClient";
import { FrameworkEvents } from "~/framework/Events";
import Wall from "./Wall";

export default class Client extends AbstractClient {
  constructor(framework: ViewerAPI) {
    super(framework);
    framework.on(FrameworkEvents.EntitySelected, (payload) => {
      const entity = this.#databaseEntities.get(payload.guid);
      if (entity) {
        console.log("entity selected");
      }
    });
  }

  protected init(): void {}

  createWall() {
    console.log("stuff" + this);
    this.ViewerAPI.Actions.Selection.PickPoints(2)
      .then((points) => {
        const start = points[0];
        const end = points[1];
        const thickness = 0.2;
        const height = 1;

        const wall = new Wall(undefined, start, end, thickness, height);
        this.#databaseEntities.set(wall.guid, wall);
        const json = wall.toJson();
        console.log(json);

        //TODO - transaction system
        this.ViewerAPI.AddEntities(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  #databaseEntities: Map<string, Wall> = new Map();
}
