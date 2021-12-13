import { Studio } from "@prisma/client";

import type { ApiFunction } from "../type";
// import type { Schemas } from "@groovox/plugin-entity";

export type Input = { where: { id: string } };

export type Output = Studio | null;

export const fn: ApiFunction<Input, Output> = fastify => (input, _ctx) => {
  const { db } = fastify;
  const { where } = input;
  return db.studio.findUnique({ where });
};
