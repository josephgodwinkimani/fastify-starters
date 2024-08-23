# Fastify v3 Starter Template with Fastify, Swagger, Effect, TypeORM, Playwright and Vitest

This is a starter template for building a Fastify Hybrid (API + web) app with Playwright and Vitest. It provides a basic structure for setting up an API + web with Fastify with **Effect** for providing a structured way to manage side effects, Playwright for e2e testing and Vitest for unit testing, Swagger for API documentation.

## Prerequisites

Before using this template, ensure that you have the following installed:

- Node.js v18

## Getting Started

1. Clone the repository.
2. Install the dependencies using `pnpm i`.
3. Start the server using `pnpm run dev`.

## Project Structure

- `src/`
  - `plugins` - Fastify plugins.
  - `entities` - TypeORM entities.
  - `routes` - Fastify routes.
- `test/` - Folder to store unit and e2e tests.
- `public/` - Folder to store public files i.e. images etc.

## API Endpoints

The API endpoints are defined in the `src/index.ts` file. You can define your routes and schemas .e.g. `src/routes/schema.ts` in this directory.

## Running the Server

To start the hot reload development server, run the following command:

```bash
pnpm run dev
# try http://localhost:1738 (homepage)
# try http://localhost:1738/api/v1/ (api)
```

To get OpenAPI schema for the API go to http://localhost:1738/documentation/json

To run tests, run the following command:

```bash
# unit tests
pnpm run test
# e2e tests
pnpm run e2e
```

## License

This repo is [MIT licensed](LICENSE).

## Related Projects

- [Refine Boilerplate for Web (PWA), Desktop and Mobile](https://github.com/josephgodwinkimani/refine-starter) — A Cross-Platform starter template for Refine.dev that utilizes the Simple REST data provider to fetch and display data from a REST API (can easily replace with graphql data provider).
-
