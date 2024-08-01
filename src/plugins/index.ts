import path from "node:path";
import compress from "@fastify/compress";
import cors from "@fastify/cors";
import express from "@fastify/express";
import helmet from "@fastify/helmet";
import multipart from "@fastify/multipart";
import fastifyRateLimit from "@fastify/rate-limit";
import fastifyStatic from "@fastify/static";
import type { FastifyInstance } from "fastify";
import swagger from '@fastify/swagger';

export const registerPlugins = (app: FastifyInstance): void => {
  // add full Express compatibility to Fastify, it exposes the same use function of Express, and it allows you to use any Express middleware or application
  app.register(express);

  // setting important security headers
  app.register(helmet, {
    contentSecurityPolicy: true,
    global: true,
  });

  // enables the use of CORS
  app.register(cors);

  // A low overhead rate limiter for your routes
  app.register(fastifyRateLimit, {
    max: Number.parseInt(
      process.env.RATELIMIT_MAX_REQUESTS as unknown as string,
    ),
    timeWindow: "1 minute",
  });

  // Fastify compression utils
  app.register(compress, { global: true });

  // Multipart support for Fastify
  app.register(multipart, {
    limits: {
      // Max field name size in bytes
      fieldNameSize: Number.parseInt(
        process.env.UPLOAD_FIELD_SIZE as unknown as string,
      ), // 2147483648 = 2 GB
      // Max field value size in bytes
      fieldSize: Number.parseInt(
        process.env.UPLOAD_FIELDSIZE as unknown as string,
      ), // 2147483648 = 2 GB
      fields: 10,
      files: 1,
      fileSize: Number.parseInt(process.env.UPLOAD_SIZE as unknown as string), // 3221225472 = 3 GB
    },
  });

  // serving static files as fast as possible
  app.register(fastifyStatic, {
    root: path.join(__dirname, '../../public'),
    prefix: '/public/', // optional: default '/'
    //wildcard: false,
  });

  // serving API docs
  app.register(swagger, {
    openapi: {
      info: {
        title: 'My API',
        description: 'documentation for my api',
        version: '1.0.0'
      },
      servers: [{
        url: `http://localhost:${process.env.PORT}`
      }],
      components: {
        securitySchemes: {
          apiKey: {
            type: 'apiKey',
            name: 'apiKey',
            in: 'header'
          }
        }
      }
    },
    hideUntagged: true,
    exposeRoute: true
  });

};
