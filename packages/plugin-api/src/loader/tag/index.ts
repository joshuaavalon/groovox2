import { idLoader } from "./id-loader";

import type { LoaderFn } from "../type";

export interface TagLoader {
  idLoader: ReturnType<typeof idLoader>;
}

export const createTagLoader: LoaderFn<TagLoader> = fastify => ({
  idLoader: idLoader(fastify.db)
});
