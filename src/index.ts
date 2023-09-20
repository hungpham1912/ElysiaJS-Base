import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { CoreModule } from "./module/core/core.module";
import { ClientModule } from "./module/client/client.module";
export const prefixApiV1 = "api/v1";
import postgres from "postgres";

async function bootstrap() {
  const sql = postgres({
    database: "demo-bun",
    username: "phamthanhhung",
    host: "localhost",
    password: "hung1912",
    port: 5432,
  });
  const [{ version }] = await sql`SELECT version()`;

  console.log("🚀 ~ file: index.ts:18 ~ bootstrap ~ version:", version);
  new Elysia()
    .group(prefixApiV1, (app) => {
      new CoreModule(app);
      new ClientModule(app);
      return app;
    })
    .use(cors())
    .listen(3000);
}

bootstrap();