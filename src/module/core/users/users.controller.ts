import { App } from "../../../shared/models/base.model";
import { UserService } from "./users.service";

export class UserController {
  constructor(public app: App) {
    this.getAll();
  }
  public userService = new UserService();

  async getAll() {
    this.app.get("/users", () => this.userService.getAll());
  }
}
