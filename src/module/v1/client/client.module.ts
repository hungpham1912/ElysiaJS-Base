import { App } from "../../../shared/common/model";
import { ClientAuthController } from "./auth/auth.controller";
import { ClientUserController } from "./users/users.controller";

export class ClientModule {
  constructor(public app: App) {
    app.group("client", (app) => {
      new ClientUserController(app);
      new ClientAuthController(app);
      return app;
    });
  }
}
