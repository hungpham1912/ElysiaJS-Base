import { HttpStatus } from "../models/base.model";

export const apiTags = (tags: string, body?: any) => {
  return {
    body,
    detail: { tags: [tags] },
  };
};

export const Res = (data: any, statusCode?: number) => {
  try {
    return new Response(JSON.stringify(data), {
      status: statusCode ?? HttpStatus.OK,
    });
  } catch (error) {
    console.log("🚀 ~ file: helper.ts:12 ~ Res ~ error:", error);
    return new Response(JSON.stringify({ error }), {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
    });
  }
};

export const Params = (data: any, statusCode?: number): ParameterDecorator => {
  return data;
};



