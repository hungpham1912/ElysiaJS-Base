type ApiOption = {
  tags: string;
  beforeHandle?: Function;
  body?: any;
};

export const apiOptions = (data: ApiOption): any => {
  const { tags, beforeHandle, body } = data;
  return {
    detail: { tags: [tags] },
    beforeHandle,
    body,
  };
};
