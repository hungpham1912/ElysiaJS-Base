export const apiTags = (tags: string, body?: any) => {
  return {
    body,
    detail: { tags: [tags] },
  };
};
