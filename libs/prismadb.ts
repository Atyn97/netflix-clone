import { PrismaClient } from "@prisma/client";

// Save Prisma Client in a global file.
// Global file does not effected by Hot Reload(when edit React Components), Fast Refresh will re - render the component
const client = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === "production") global.prismadb = client;

export default client;
