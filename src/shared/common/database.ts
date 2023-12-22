import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
export class DataSource {
  public static db: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    DefaultArgs
  >;
}
