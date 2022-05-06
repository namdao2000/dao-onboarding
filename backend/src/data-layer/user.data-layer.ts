import { DB } from '../helpers/database.helper';
import { SQL_STATEMENTS } from './sql-statements';
import { SignupReqArgs } from '../controllers/types';

export interface UserSchema {
  discord_username: string;
  user_role: string;
  created_at: string;
  updated_at: string;
}

export const UserDataLayer = {
  createNewUser: async ({
    discord_username,
    user_role,
  }: SignupReqArgs): Promise<void> => {
    await (await DB).all(SQL_STATEMENTS.createUser, [discord_username, user_role]);
  },
  getUsers: async (offset: number): Promise<UserSchema[] | undefined> => {
    return await (await DB).get(SQL_STATEMENTS.getUsers, [offset]);
  },
};
