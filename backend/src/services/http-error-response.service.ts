import { ValidationError } from 'express-validator/src/base';

export enum ErrorCode {
  USERNAME_TAKEN = 'USERNAME_TAKEN',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  BAD_REQUEST = 'BAD_REQUEST',
}

export interface IHttpErrorResponse {
  status: number;
  message: string;
  errors?: ValidationError[];
  error_code: ErrorCode;
}

export class HttpError extends Error {
  private status: number;
  private error_code: ErrorCode;

  constructor(args: IHttpErrorResponse) {
    super(args.message);
    this.status = args.status;
    this.error_code = args.error_code;
  }
}

export const getHttpErrorResponse = (errorCode: ErrorCode): IHttpErrorResponse => {
  const response: IHttpErrorResponse = {
    status: 400,
    message: errorCode,
    error_code: errorCode,
  };
  switch (errorCode) {
    case ErrorCode.UNKNOWN_ERROR: {
      response.status = 500;
      response.message =
        'An unknown error has occurred while processing your request. Please try again later.';
      break;
    }
  }

  return response;
};
