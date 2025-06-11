import type { Framework } from "~/framework/framework";

export abstract class AbstractClient {
  protected framework: Framework;

  constructor(framework: Framework) {
    this.framework = framework;
    this.init();
  }

  protected abstract init(): void;
}
