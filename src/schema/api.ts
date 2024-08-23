export const apiScheme = {
  schema: {
    description: "ping the api server",
    tags: ["ping", "api"],
    summary: "ping the api server",
    security: [{ apiKey: [] }],
    response: {
      200: {
        description: "Successful response",
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
};
