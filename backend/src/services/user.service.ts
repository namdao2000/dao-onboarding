import { UserDataLayer, UserSchema } from '../data-layer/user.data-layer';
import {
  ErrorCode,
  getHttpErrorResponse,
  HttpError,
} from './http-error-response.service';
import { SignupReqArgs } from '../controllers/types';

export const UserService = {
  createNewUser: async ({ discordUsername, userRole }: SignupReqArgs): Promise<void> => {
    try {
      await UserDataLayer.createNewUser({
        discordUsername,
        userRole,
      });
    } catch (e) {
      throw new HttpError(getHttpErrorResponse(ErrorCode.USERNAME_TAKEN));
    }
  },
  getUsers: async (offset: number): Promise<UserSchema[] | undefined> => {
    return await UserDataLayer.getUsers(offset);
  },
};
