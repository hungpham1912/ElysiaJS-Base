import { apiOptions } from "../../../../shared/common/swagger";
import { App } from "../../../../shared/common/model";
import { jwtGuard } from "../../core/auth/guard/jwt.guard";
import { ClientAuthService } from "./auth.service";
import { t } from "elysia";

export class ClientAuthController {
  public clientAuthService = new ClientAuthService();
  constructor(public app: App) {
    this.app.post(
      "/users",
      ({ body }) => this.clientAuthService.register(body),
      apiOptions({
        tags: "Client / Auth",
        body: t.Object({
          fullName: t.String(),
          phoneNumber: t.String(),
          email: t.String(),
        }),
      })
    );
  }
}
