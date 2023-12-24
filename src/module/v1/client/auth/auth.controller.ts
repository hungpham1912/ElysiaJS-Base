import { apiOptions } from "../../../../shared/common/swagger";
import { App } from "../../../../shared/common/model";
import { ClientAuthService } from "./auth.service";
import { t } from "elysia";
import jwt from "@elysiajs/jwt";
export class ClientAuthController {
  public clientAuthService = new ClientAuthService();
  constructor(public app: App) {
    this.app
      .use(
        jwt({
          name: "jwt",
          secret: process.env.JWT_SECRET ?? "xxx",
        })
      )
      .post(
        "/auth/register",
        ({ body }) => this.clientAuthService.register(body),
        apiOptions({
          tags: "Client / Auth",
          body: t.Object({
            fullName: t.String(),
            phoneNumber: t.String(),
            email: t.String(),
          }),
        })
      )
      .post(
        "/auth/login",
        (context) => this.clientAuthService.login(context.body, context),
        apiOptions({
          tags: "Client / Auth",
          body: t.Object({
            phoneNumber: t.String(),
          }),
        })
      );
  }
}
