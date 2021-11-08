import type { FastifyInstance } from "fastify";
import type { PrismaClient } from "@prisma/client";
import type DataLoader from "dataloader";

export interface LoaderFn<T> {
  (fastify: FastifyInstance): T;
}

type Await<T> = T extends Promise<infer U> ? U : T;
type ElementOf<T> = T extends Array<infer U> ? U : never;

export type BatchResult<T extends (...args: any) => (...args: any) => any> =
  ElementOf<Await<ReturnType<ReturnType<T>>>>;

export type BatchKey<T> = T extends (
  db: PrismaClient,
  ...args: any
) => (keys: Array<infer U>) => any
  ? U
  : never;

export type BatchLoaderFn<T extends (...args: any) => (...args: any) => any> = (
  db: PrismaClient
) => DataLoader<BatchKey<T>, BatchResult<T>>;
