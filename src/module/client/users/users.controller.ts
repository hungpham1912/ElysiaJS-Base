import { App } from "../../../shared/models/base.model";
import { ClientUserService } from "./users.service";

export class ClientUserController {
  constructor(public app: App) {
    this.getAll();
  }
  public userService = new ClientUserService();

  async getAll() {
    this.app.get("/users", () => this.userService.getAll());
  }
}
