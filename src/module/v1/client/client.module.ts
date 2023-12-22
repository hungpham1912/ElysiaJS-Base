import swagger from "@elysiajs/swagger";
import { App } from "../../../shared/common/model";
import { ClientUserController } from "./users/users.controller";

export class ClientModule {
  constructor(public app: App) {
    app.group("client", (app) => {
      new ClientUserController(app);
      return app;
    });
  }
}
