import { createTRPCRouter } from "~/server/api/trpc";
import { authRouter } from "./routers/auth";
import { menusRouter } from "./routers/menus";
import { languagesRouter } from "./routers/languages";
import { paymentsRouter } from "./routers/payments";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  menus: menusRouter,
  auth: authRouter,
  languages: languagesRouter,
  payments: paymentsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
