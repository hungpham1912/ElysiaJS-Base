import { apiOptions } from "../../../../shared/common/swagger";
import { App } from "../../../../shared/common/model";
import { ClientUserService } from "./users.service";
import jwt from "@elysiajs/jwt";

export class ClientUserController {
  public userService = new ClientUserService();
  constructor(public app: App) {
    this.app
      .use(
        jwt({
          name: "jwt",
          secret: "Fischl von Luftschloss Narfidort",
        })
      )
      .get(
        "/users",
        () => this.userService.getAll(),
        apiOptions("Client / Users")
      )
      .get(
        "/users/:userId",
        ({ params: { userId } }) => this.userService.getOne(userId),
        apiOptions("Client / Users")
      );
  }
}
