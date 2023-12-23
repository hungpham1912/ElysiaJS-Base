type ApiOption = {
  tags: string;
  beforeHandle?: Function;
};

export const apiOptions = (data: ApiOption): any => {
  const { tags, beforeHandle } = data;
  return {
    detail: { tags: [tags] },
    beforeHandle,
  };
};
