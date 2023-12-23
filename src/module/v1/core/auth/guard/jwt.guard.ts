import { Context } from "elysia";
import { ElysiaInstance, TypedRoute } from "elysia/dist/types";
import { BASE_ERROR } from "../../../../../shared/common/errors";
import { jwt } from "@elysiajs/jwt";
export const jwtGuard = (
  data: Context<TypedRoute, ElysiaInstance["store"]> & ElysiaInstance["request"]
) => {
  try {
    const { headers } = data;
    const token = headers["Authorization"];
    if (!token) throw BASE_ERROR.UNAUTHORIZED;
  } catch (error) {
    throw BASE_ERROR.UNAUTHORIZED;
  }
};
