import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { CoreModule } from "./module/v1/core/core.module";
import { ClientModule } from "./module/v1/client/client.module";
import { DataSource } from "./shared/common/database";
import { PrismaClient } from "@prisma/client";
import swagger from "@elysiajs/swagger";
import { matching } from "./shared/common/transform";
async function bootstrap() {
  DataSource.db = new PrismaClient();
  const ts = new Elysia()
    .use(
      swagger({
        path: "/api/docs",
        documentation: {
          info: {
            title: "Elysia Documentation",
            version: "1.0.0",
          },
        },
        autoDarkMode: false,
      })
    )
    .onAfterHandle(({ request, path, set }, response) => {
      set.status = matching(response, request, request.url);
      return response
    })
    .onError(({ code, error, request, set }) => {
      set.status = matching(error, request, request.url);
      return error;
    })
    .group("api/v1", (app) => {
      new CoreModule(app);
      new ClientModule(app);
      return app;
    })
    .use(cors())
    .listen(3000);
}

bootstrap();
