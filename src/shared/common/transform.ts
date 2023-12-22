import { HttpMethod, HttpStatus } from "./model";

export function matching(data: any, request: Request, url: string) {
  let status = 200;
  const { method } = request;
  switch (true) {
    case !data:
      break;
    case typeof data.statusCode != "number" && method == HttpMethod.GET:
      status = HttpStatus.OK;
      break;
    case typeof data.statusCode != "number" && method == HttpMethod.POST:
      status = HttpStatus.CREATED;
      break;
    case typeof data.statusCode == "number":
      status = data.statusCode;
      break;
  }

  const now = new Date().toISOString();
  console.log(`💥💥 ${method}  ~ ${url} ~ ${status} ... ${now}`);
  return status;
}
