import type { FastifyInstance } from "fastify";

export const registerRoutes = (app: FastifyInstance): void => {
  app.get("/", async (request, reply) => {
    reply.sendFile("index.html", "public");
  });
};
