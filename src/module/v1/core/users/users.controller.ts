import { apiOptions } from "../../../../shared/common/swagger";
import { App } from "../../../../shared/common/model";
import { UserService } from "./users.service";

export class UserController {
  userService: UserService = new UserService();
  constructor(public app: App) {
    this.app.get("/users", () => this.userService.getAll());
  }
}
