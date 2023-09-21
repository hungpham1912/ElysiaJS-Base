import { App } from "../../../shared/models/base.model";
import { UserService } from "./users.service";

export class UserController {
  userService: UserService;
  constructor(public app: App) {
    this.userService = new UserService();
    this.getAll();
  }

  async getAll() {
    this.app.get("/users", () => this.userService.getAll());
  }
}
