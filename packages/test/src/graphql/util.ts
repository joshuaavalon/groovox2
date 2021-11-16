import type { FastifyInstance } from "fastify";

/**
 * For syntax highlight only
 */
export const gql = (value: TemplateStringsArray): string => value.toString();

export const enquiry = async (
  server: FastifyInstance,
  query: string,
  variables?: Record<string, unknown>
): Promise<any> => {
  const res = await server.inject({
    method: "POST",
    url: "/graphql",
    payload: {
      query,
      variables
    }
  });
  const json = res.json();
  console.log({ json });
  return json?.data;
};
