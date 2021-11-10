import type { FastifyRequest } from "fastify";

type Input = {
  id: string;
};

export const getById = async (input: Input, req: FastifyRequest) => {
  const { db } = req.server;
  const { id } = input;
  const where = { id };
  return await db.studio.findUnique({ where });
};
