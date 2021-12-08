import type { Sdk } from "@groovox/test-graphql-client";

type Tag = {
  name: string;
  description: string;
};

type TagCategory = {
  name: string;
  description: string;
};

export const createTagCategory =
  (sdk: Sdk, createdIds: string[], createdCategoryIds: string[]) =>
  async (tagCategory: TagCategory, tags: Tag[] = []): Promise<void> => {
    const { data } = await sdk.createTagCategory({
      data: tagCategory
    });

    if (data) {
      const categoryId = data.createTagCategory.id;
      createdCategoryIds.push(categoryId);

      for (const tag of tags) {
        const tagResult = await sdk.createTag({
          data: { ...tag, categoryId }
        });
        if (tagResult.data) {
          createdIds.push(tagResult.data.createTag.id);
        }
      }
    }
  };

export const cleanUp = async (
  sdk: Sdk,
  createdCategoryIds: string[]
): Promise<void> => {
  await sdk.removeTagCategories({
    where: { id: { in: createdCategoryIds } }
  });
};
