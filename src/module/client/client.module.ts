import swagger from "@elysiajs/swagger";
import { App } from "../../shared/models/base.model";
import { ClientUserController } from "./users/users.controller";

export class ClientModule {
  constructor(public app: App) {
    app
      .use(
        swagger({
          path: "client/api/docs",
          documentation: {
            info: {
              title: "Elysia Documentation",
              version: "1.0.0",
            },
          },
          exclude: ["api/v1"],
        })
      )
      .group("client/api/v1", (app) => {
        new ClientUserController(app);
        return app;
      });
  }
}
