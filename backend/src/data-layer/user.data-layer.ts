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
    await (await DB).run(SQL_STATEMENTS.createUser, [discordUsername, userRole]);
  },
  getUsers: async (offset: number): Promise<UserSchema[] | undefined> => {
    const result = await (await DB).all(SQL_STATEMENTS.getUsers, [offset]);
    console.log('no way', result);
    return result;
  },
};
