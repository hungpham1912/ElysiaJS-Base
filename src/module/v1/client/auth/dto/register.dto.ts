export type RegisterDto =
  | {
      phoneNumber: string;
      email: string;
      fullName: string;
    }
  | any;
