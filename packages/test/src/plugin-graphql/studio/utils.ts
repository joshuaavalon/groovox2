import type { Sdk } from "@groovox/test-graphql-client";

type Studio = {
  name: string;
  description: string;
};

export const createStudio =
  (sdk: Sdk, createdIds: string[]) =>
  async (studio: Studio): Promise<void> => {
    const { data } = await sdk.createStudio({
      data: studio
    });

    if (data) {
      createdIds.push(data.createStudio.id);
    }
  };

export const cleanUp = async (
  sdk: Sdk,
  createdIds: string[]
): Promise<void> => {
  await sdk.removeStudios({
    where: { id: { in: createdIds } }
  });
};
