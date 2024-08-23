import { Console, Effect, pipe } from "effect";
import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { User } from "../entities/User";
import AppDataSource from "../typeorm.config";

export const registerApiRoutes = (app: FastifyInstance): void => {
  // Get Single User
  app.get(
    "/api/v1/user/:id",
    async (request: FastifyRequest<any>, reply: FastifyReply) => {
      const userId: number = Number(request?.params?.id);

      const result: any = await pipe(
        await getUser(userId),
        Effect.runPromise, // Execute the Effect
      );

      const logGetUser: Effect.Effect<void, never, never> = Console.log(result);
      Effect.runSync(logGetUser); // Log the request

      if (Effect.isSuccess(result)) {
        reply.code(200).send(result); // Send the user data as JSON
      } else {
        reply.code(404).send({ error: result.error.message }); // Return error message as JSON
      }
    },
  );
};

const getUser: (
  userId: number,
) => Promise<
  Effect.Effect<User, never, never> | Effect.Effect<never, Error, never>
> = async (userId: number) => {
  // Log the user information
  const getUserEffect: Effect.Effect<void, never, never> = Console.log(
    `Fetching user with ID: ${userId}`,
  );
  Effect.runSync(getUserEffect); // Log the request

  // Gets repository for the User entity
  const userRepository = AppDataSource.getRepository(User);

  // Check if the user exists in our "database"
  const findOneuser = await userRepository.findOne({
    where: { id: userId },
  });

  if (findOneuser) {
    // explicitly create an effect that is guaranteed to succeed
    return Effect.succeed(findOneuser); // Return the user wrapped in Effect
  }
  // explicitly create an effect that encapsulates an error
  return Effect.fail(new Error("User not found")); // Return an error wrapped in Effect
};
