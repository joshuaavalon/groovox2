import type { FastifyInstance } from "fastify";

/**
 * For syntax highlight only
 */
export const gql = (value: TemplateStringsArray): string => value.toString();

type Result<T> = { data?: T | null; errors: unknown[] };

export const createEnquiry =
  <In, Out>(query: string) =>
  async (server: FastifyInstance, variables: In): Promise<Result<Out>> => {
    const res = await server.inject({
      method: "POST",
      url: "/graphql",
      payload: {
        query,
        variables
      }
    });
    return res.json();
  };

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
