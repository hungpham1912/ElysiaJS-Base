import { Context } from "elysia";
import { ElysiaInstance, TypedRoute } from "elysia/dist/types";
import { BASE_ERROR } from "../../../../../shared/common/errors";

export const jwtGuard = (
  data: Context<TypedRoute, ElysiaInstance["store"]> & ElysiaInstance["request"]
) => {
  try {
    const { headers } = data;
    const token = headers["Authorization"];
    if (!token) throw BASE_ERROR.UNAUTHORIZED;
    return;
  } catch (error) {
    throw BASE_ERROR.UNAUTHORIZED;
  }
};
