import { DataSource } from "../../../../shared/common/database";

export class UserService {
  async getAll() {
    try {
      // return await DataSource.db.user.findMany({ where: {} });
      console.log("adasdasdas");
    } catch (error) {
      console.log("🚀 ~ file: users.service.ts:8 :", error);
      return null;
    }
  }
}
