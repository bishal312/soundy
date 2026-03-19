
import { createTRPCRouter } from "../init";
import { VoicesRouter } from "./voices";
export const appRouter = createTRPCRouter({
  voices: VoicesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
