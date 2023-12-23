import { DataSource } from "../../../../shared/common/database";
import { BASE_ERROR } from "../../../../shared/common/errors";
import { LoginDto } from "./dto/login..dto";
import { RegisterDto } from "./dto/register.dto";

export class ClientAuthService {
  async login(body: LoginDto) {
    try {
      return;
    } catch (error) {
      return BASE_ERROR.INTERNAL_SERVER_ERROR;
    }
  }

  async register(data: RegisterDto) {
    try {
      return await DataSource.db.user.create({ data });
    } catch (error) {
      console.log(
        "🚀 ~ file: auth.service.ts:19 ~ ClientAuthService ~ register ~ error:",
        error
      );
      return BASE_ERROR.INTERNAL_SERVER_ERROR;
    }
  }
}
