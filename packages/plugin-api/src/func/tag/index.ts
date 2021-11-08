import { getById } from "./get-by-id";

import type { ApiFn } from "../type";

export interface TagApi {
  getById: ReturnType<typeof getById>;
}

export const createTagApi: ApiFn<TagApi> = fastify => ({
  getById: getById(fastify.db)
});
