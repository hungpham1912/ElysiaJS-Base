import { Context } from "elysia";
import { ElysiaInstance, TypedRoute } from "elysia/dist/types";
import { BASE_ERROR } from "../../../../../shared/common/errors";
import { ContextType } from "../../../../../shared/common/model";
import { DataSource } from "../../../../../shared/common/database";
export const jwtClientGuard = async (data: ContextType & { user: any }) => {
  try {
    const { headers, jwt } = data;
    const token = headers["authorization"]?.split(" ")[1];
    if (!token) throw BASE_ERROR.UNAUTHORIZED;
    const payload = await jwt.verify(token);
    const user = await DataSource.db.user.findUniqueOrThrow({
      where: { id: payload.userId },
    });
    if (!user) throw BASE_ERROR.UNAUTHORIZED;
    data.user = user;
  } catch (error) {
    throw BASE_ERROR.UNAUTHORIZED;
  }
};
