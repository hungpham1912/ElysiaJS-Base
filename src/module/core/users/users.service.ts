import { DataSource } from "../../../database/connect";

export class UserService {
  async getAll() {
    try {
      return DataSource.db.user.findMany({ where: {} });
    } catch (error) {
      console.log("🚀 ~ file: users.service.ts:8 :", error);
      return null;
    }
  }
}
