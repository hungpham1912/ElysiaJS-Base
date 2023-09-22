import { apiTags } from "../../../shared/helpers/helper";
import { App } from "../../../shared/models/base.model";
import { UserService } from "./users.service";

export class UserController {
  userService: UserService = new UserService();
  constructor(public app: App) {
    this.app.get("/users", () => this.userService.getAll(), apiTags("Users"));
  }
}
