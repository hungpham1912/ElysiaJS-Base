export const apiOptions = (tags: string, body?: any) => {
  return {
    body,
    detail: { tags: [tags] },
  };
};
