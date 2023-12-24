import { BASE_ERROR } from "../../../../shared/common/errors";
import { ContextType } from "../../../../shared/common/model";

export class ClientUserService {
  async getAll() {
    try {
      console.log("getAll()");
      return "";
    } catch (error) {
      return BASE_ERROR.INTERNAL_SERVER_ERROR;
    }
  }

  async profile(context: any) {
    return context.user;
  }
}
