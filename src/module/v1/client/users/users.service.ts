export class ClientUserService {
  async getAll() {
    try {
      console.log("getAll()");
      return "";
    } catch (error) {
      console.log(
        "🚀 ~ file: users.service.ts:8 ~ ClientUserService ~ getAll ~ error:",
        error
      );
      throw error;
    }
  }

  async getOne(id: string) {
    console.log("getOne()");
  }
}
