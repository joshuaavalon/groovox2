import { getLatest } from "./get-latest";

import type { ApiFn } from "../type";

export interface VersionApi {
  getLatest: ReturnType<typeof getLatest>;
}

export const createVersionApi: ApiFn<VersionApi> = fastify => ({
  getLatest: getLatest(fastify.db)
});
