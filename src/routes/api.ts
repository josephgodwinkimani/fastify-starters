import type { FastifyInstance } from "fastify";
import { apiScheme } from "../schema/api";

export const registerApiRoutes = (app: FastifyInstance): void => {
    app.get("/api/v1/ping", apiScheme, async (request, reply) => {
        app.log.info(`⚡ API Server is ALIVE, listening on port ${process.env.PORT}`);
        reply.send({
            message: "pong",
        });
    });
};
