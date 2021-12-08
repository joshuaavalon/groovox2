import type { Sdk } from "@groovox/test-graphql-client";

type TagCategory = {
  name: string;
  description: string;
};

type Tag = {
  name: string;
  description: string;
};

export const createTagCategory =
  (sdk: Sdk, createdIds: string[]) =>
  async (tagCategory: TagCategory, tags: Tag[] = []): Promise<void> => {
    const { data } = await sdk.createTagCategory({
      data: tagCategory
    });

    if (data) {
      const categoryId = data.createTagCategory.id;
      createdIds.push(categoryId);

      for (const tag of tags) {
        await sdk.createTag({
          data: { ...tag, categoryId }
        });
      }
    }
  };

export const cleanUp = async (
  sdk: Sdk,
  createdIds: string[]
): Promise<void> => {
  await sdk.removeTagCategories({
    where: { id: { in: createdIds } }
  });
};
