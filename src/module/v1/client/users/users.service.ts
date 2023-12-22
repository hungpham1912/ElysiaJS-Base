import { BASE_ERROR } from "../../../../shared/common/errors";

export class ClientUserService {
  async getAll() {
    try {
      console.log("getAll()");
      return "";
    } catch (error) {
      return BASE_ERROR.INTERNAL_SERVER_ERROR;
    }
  }

  async getOne(id: string) {
    console.log("getOne()");
  }
}
