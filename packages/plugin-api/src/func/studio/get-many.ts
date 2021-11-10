import type { FastifyRequest } from "fastify";
import type {} from "../../nexus.generated";

type Pagination = {
  skip?: number | null;
  take?: number | null;
};

type Input = {
  id: string;
  pagination?: Pagination | null;
};

export const getMany = async (input: Input, req: FastifyRequest) => {
  const { db, apiUtil } = req.server;
  const pagination = apiUtil.ignoreNil(input.pagination);
  const where = { id };
  return await db.studio.findMany({ where, ...pagination });
};
