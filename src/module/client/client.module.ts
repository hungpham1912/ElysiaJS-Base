import { App } from "../../shared/models/base.model";
import { ClientUserController } from "./users/users.controller";

export class ClientModule {
  constructor(public app: App) {
    app.group("client", (app) => {
      new ClientUserController(app);
      return app;
    });
  }
}
