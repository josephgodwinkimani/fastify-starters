import "dotenv/config";
import path from "node:path";
import fastify, { type FastifyInstance } from "fastify";
import { registerPlugins } from "./plugins";
import { registerRoutes } from "./routes";
import { registerApiRoutes } from "./routes/api";
import AppDataSource from "./typeorm.config";

const app: FastifyInstance = fastify({
  logger: {
    level: "info",
    prettyPrint: false,
    file: path.join(__dirname, "../logs/app.log"),
  },
  bodyLimit: 6442450944,
});

// Register plugins
registerPlugins(app);

// Register routes
registerRoutes(app);

registerApiRoutes(app);

const start: () => Promise<void> = async () => {
  try {
    await AppDataSource.initialize();
    await app.listen(process.env?.PORT as unknown as string);
    await app.ready();
    app.swagger(); // Serve the Swagger documentation
    app.log.info(`⚡ Server listening on port ${process.env.PORT}`);
    console.log(`⚡ Server listening on port ${process.env.PORT}`);
    app.log.info(app.printRoutes());
    console.log(app.printRoutes());
  } catch (err: any) {
    app.log.error(`${err}`);
    console.log(`${err}`);
    process.exit(1);
  }
};

start();

export default app;
