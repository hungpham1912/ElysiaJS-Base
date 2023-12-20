import { swagger } from "@elysiajs/swagger";
import { App } from "../../shared/models/base.model";
import { UserController } from "./users/users.controller";
import Elysia from "elysia";

export class CoreModule {
  constructor(public app: App) {
    app
      .use(
        swagger({
          path: "/api/docs",
          documentation: {
            info: {
              title: "Elysia Documentation",
              version: "1.0.0",
            },
          },
          exclude: ["api/v1"],
        })
      )
      .group("api/v1", (app) => {
        new UserController(app);
        return app;
      });
  }
}
