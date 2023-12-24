import { DataSource } from "../../../../shared/common/database";
import { BASE_ERROR } from "../../../../shared/common/errors";
import { ContextType, HttpStatus } from "../../../../shared/common/model";
import { LoginDto } from "./dto/login..dto";
import { RegisterDto } from "./dto/register.dto";

export class ClientAuthService {
  async login(body: LoginDto | any, context: ContextType | any) {
    try {
      const { phoneNumber } = body;
      const user = await DataSource.db.user.findUnique({
        where: { phoneNumber },
      });
      if (!user)
        return {
          statusCode: HttpStatus.UNAUTHORIZED,
          message: "Not found phone number",
        };
      const { jwt } = context;
      const token = await jwt.sign({
        userId: user.id,
      });

      return { token, data: user };
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
