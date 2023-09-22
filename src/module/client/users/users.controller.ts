import { apiTags } from "../../../shared/helpers/helper";
import { App } from "../../../shared/models/base.model";
import { ClientUserService } from "./users.service";

export class ClientUserController {
  public userService = new ClientUserService();
  constructor(public app: App) {
    this.app.get(
      "/users",
      () => this.userService.getAll(),
      apiTags("Client / Users")
    );
  }
}
