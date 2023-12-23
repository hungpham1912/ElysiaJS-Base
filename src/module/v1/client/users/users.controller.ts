import { apiOptions } from "../../../../shared/common/swagger";
import { App } from "../../../../shared/common/model";
import { ClientUserService } from "./users.service";
import jwt from "@elysiajs/jwt";
import { jwtGuard } from "../../core/auth/guard/jwt.guard";

export class ClientUserController {
  public userService = new ClientUserService();
  constructor(public app: App) {
    this.app
      .get(
        "/users",
        () => this.userService.getAll(),
        apiOptions({ tags: "Client / Users", beforeHandle: jwtGuard })
      )
      .get(
        "/users/:userId",
        ({ params: { userId } }) => this.userService.getOne(userId),
        apiOptions({ tags: "Client / Users" })
      );
  }
}
