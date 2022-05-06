import { UserDataLayer, UserSchema } from '../data-layer/user.data-layer';
import {
  ErrorCode,
  getHttpErrorResponse,
  HttpError,
} from './http-error-response.service';
import { SignupReqArgs } from '../controllers/types';

export const UserService = {
  createNewUser: async ({
    discord_username,
    user_role,
  }: SignupReqArgs): Promise<void> => {
    try {
      await UserDataLayer.createNewUser({
        discord_username,
        user_role,
      });
    } catch (e) {
      throw new HttpError(getHttpErrorResponse(ErrorCode.USERNAME_TAKEN));
    }
  },
  getUsers: async (offset: number): Promise<UserSchema[] | undefined> => {
    return await UserDataLayer.getUsers(offset);
  },
};
