import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { CoreModule } from "./module/core/core.module";
import { ClientModule } from "./module/client/client.module";
import { DataSource } from "./database/connect";
import { PrismaClient } from "@prisma/client";
import swagger from "@elysiajs/swagger";
export const prefixApiV1 = "api/v1";

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
    .onBeforeHandle(({ request }) => {
      console.log(
        `💥💥 ${request.method}  ~ ${request.url} ... ${new Date().getTime()}`
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