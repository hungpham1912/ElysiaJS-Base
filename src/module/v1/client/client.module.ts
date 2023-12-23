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
      .onBeforeHandle(({ headers }) => {
        console.log(
          "🚀 ~ file: client.module.ts:15 ~ ClientModule ~ .onBeforeHandle ~ headers:",
          headers
        );
      })
      .group("client", (app) => {
        new ClientUserController(app);
        return app;
      });
  }
}
