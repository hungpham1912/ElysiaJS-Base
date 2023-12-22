import { BasicResponse, HttpStatus } from "./model";

export const MESSAGES_BASE_ERROR = {
  1: "INTERNAL_SERVER_ERROR(*)",
};

export const BASE_ERROR = {
  INTERNAL_SERVER_ERROR: {
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    error: MESSAGES_BASE_ERROR[1],
  },
};