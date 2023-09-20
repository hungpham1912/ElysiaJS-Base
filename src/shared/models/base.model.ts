import { Elysia } from "elysia";

export type App = Elysia<
  string,
  {
    error: {};
    request: {};
    store: {};
    schema: {};
    meta: {
      schema: {};
      defs: {};
      exposed: {};
    };
  }
>;
