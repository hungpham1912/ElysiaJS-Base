import { swagger } from "@elysiajs/swagger";
import { App } from "../../../shared/common/model";
import { UserController } from "./users/users.controller";

export class CoreModule {
  constructor(public app: App) {
    app.group("", (app) => {
      new UserController(app);
      return app;
    });
  }
}
