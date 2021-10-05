export const formatPrisma = async (content: string): Promise<string> => {
  const lines = content.split("\n");
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine.length <= 0) {
      continue;
    }
  }
  return content;
};
