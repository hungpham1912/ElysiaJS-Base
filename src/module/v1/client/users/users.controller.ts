import { apiOptions } from "../../../../shared/common/swagger";
import { App } from "../../../../shared/common/model";
import { ClientUserService } from "./users.service";
import jwt from "@elysiajs/jwt";
import { jwtClientGuard } from "../../core/auth/guard/jwt.guard";

export class ClientUserController {
  public userService = new ClientUserService();
  constructor(public app: App) {
    this.app
      .use(
        jwt({
          name: "jwt",
          secret: process.env.JWT_SECRET ?? "xxx",
        })
      )
      .get(
        "/users",
        () => this.userService.getAll(),
        apiOptions({ tags: "Client / Users", beforeHandle: jwtClientGuard })
      )
      .get(
        "/users/profile",
        (context) => this.userService.profile(context),
        apiOptions({ tags: "Client / Users", beforeHandle: jwtClientGuard })
      );
  }
}
