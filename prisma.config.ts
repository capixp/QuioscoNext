// prisma.config.ts (raíz del proyecto)
import 'dotenv/config'              // <-- ESTA es la que carga el .env
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: { path: 'prisma/migrations' },
  engine: 'classic',
  datasource: { url: env('DATABASE_URL') },
});
