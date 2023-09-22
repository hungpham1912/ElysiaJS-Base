import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { CoreModule } from "./module/core/core.module";
import { ClientModule } from "./module/client/client.module";
import { DataSource } from "./database/connect";
import { PrismaClient } from "@prisma/client";
import swagger from "@elysiajs/swagger";
export const prefixApiV1 = "api/v1";

enum HttpMethod {
  GET = "GET",
  POST = "POST",
}

enum HttpStatus {
  OK = 200,
  CREATED = 201,
}

function matching(data: any, context: any) {
  let status = 200;
  const request = context.switchToHttp().getRequest();

  const { url, method } = request;
  switch (true) {
    case !data:
      break;
    case typeof data.statusCode != "number" && method == HttpMethod.GET:
      status = HttpStatus.OK;
      break;
    case typeof data.statusCode != "number" && method == HttpMethod.POST:
      status = HttpStatus.CREATED;
      break;
    case typeof data.statusCode == "number":
      status = data.statusCode;
      break;
  }

  const now = new Date().toISOString();
  context.switchToHttp().getResponse().status(status);

  console.log(`💥💥 ${method}  ~ ${url}  ${status} ... ${now}`);
  return data;
}

async function bootstrap() {
  DataSource.db = new PrismaClient();
  new Elysia()
    .use(
      swagger({
        path: "/api/docs",
        documentation: {
          info: {
            title: "Elysia Documentation",
            version: "1.0.0",
          },
        },
        exclude: ["api/v1"],
      })
    )
    .onBeforeHandle(({ request, store, query, set }) => {
      console.log(
        `💥💥 ${request.method}  ~ ${request.url}  ${
          set.status
        } ... ${new Date().getTime()}`
      );
    })
    .group(prefixApiV1, (app) => {
      new CoreModule(app);
      new ClientModule(app);
      return app;
    })
    .use(cors())
    .listen(3000);
}

bootstrap();