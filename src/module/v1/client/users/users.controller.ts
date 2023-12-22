import { apiTags } from "../../../../shared/common/swagger";
import { App } from "../../../../shared/common/model";
import { ClientUserService } from "./users.service";

export class ClientUserController {
  public userService = new ClientUserService();
  constructor(public app: App) {
    this.app.get(
      "/users",
      () => this.userService.getAll(),
      apiTags("Client / Users")
    );

    this.app.get(
      "/users/:userId",
      ({ params: { userId } }) => this.userService.getOne(userId),
      apiTags("Client / Users")
    );
  }
}
