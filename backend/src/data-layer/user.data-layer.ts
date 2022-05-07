import { DB } from '../helpers/database.helper';
import { SQL_STATEMENTS } from './sql-statements';
import { SignupReqArgs } from '../controllers/types';

export interface UserSchema {
  discordUsername: string;
  userRole: string;
  createdAt: string;
  updatedAt: string;
}

export const UserDataLayer = {
  createNewUser: async ({ discordUsername, userRole }: SignupReqArgs): Promise<void> => {
    await (await DB).all(SQL_STATEMENTS.createUser, [discordUsername, userRole]);
  },
  getUsers: async (offset: number): Promise<UserSchema[] | undefined> => {
    return await (await DB).get(SQL_STATEMENTS.getUsers, [offset]);
  },
};
