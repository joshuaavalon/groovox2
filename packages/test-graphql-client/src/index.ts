import { print } from "graphql";
import { getSdk } from "./types.generated";

import type { FastifyInstance } from "fastify";
import type { Requester, Sdk } from "./types.generated";

export const createSdk = (server: FastifyInstance): Sdk => {
  const requester: Requester = async (doc, variables) => {
    const res = await server.inject({
      method: "POST",
      url: "/graphql",
      payload: {
        query: print(doc),
        variables
      }
    });
    return res.json();
  };
  return getSdk(requester);
};

export type { Sdk } from "./types.generated";
