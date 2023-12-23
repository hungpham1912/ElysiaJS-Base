import { App } from "../../../shared/common/model";
import { ClientUserController } from "./users/users.controller";
import { jwt } from "@elysiajs/jwt";

export class ClientModule {
  constructor(public app: App) {
    app
      .use(
        jwt({
          name: "jwt",
          secret: "Fischl von Luftschloss Narfidort",
        })
      )
      .group("client", (app) => {
        new ClientUserController(app);
        return app;
      });
  }
}
