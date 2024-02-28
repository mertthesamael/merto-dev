import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'
import { performance } from "perf_hooks";
import * as util from "util";

const libsql = createClient({
  url: 'file:replica.db',
  syncUrl: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
})

const adapter = new PrismaLibSQL(libsql)

async function sync() {
 return libsql.sync()
}

const prismaClientSingleton = () => {
  sync()
  return new PrismaClient({ adapter }).$extends({
    /**
     * Query logging Client extension
     * Source: https://github.com/prisma/prisma-client-extensions/tree/main/query-logging
    */
    query: {
      $allModels: {
        async $allOperations({ operation, model, args, query }) {
          const start = performance.now();
          const result = await query(args);
          const end = performance.now();
          const time = end - start;
          console.log(
            util.inspect(
              { model, operation, time, args },
              { showHidden: false, depth: null, colors: true }
            )
          );
          return result;
        },
      },
    },
  })
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma