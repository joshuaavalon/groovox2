type Input = NexusGen["inputTypeShapes"]["Pagination"];

type Output = { take?: number; skip?: number };

export const adaptPagination: InputAdapter<Input, Output> = input => {
  const output: Output = {
    take: input.take ?? undefined,
    skip: input.skip ?? undefined
  };
  return output;
};
