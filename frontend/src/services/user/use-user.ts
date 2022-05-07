import { useCallback } from 'react';
import { axiosWrapper } from '../axios/axios.wrapper';
import { APP_URL } from '../../utils/constants';
import { User } from '../../types/user';

export interface IUseUserReturn {
  getUsers: (offset: number) => Promise<User[]>;
}

export const useUser = (): IUseUserReturn => {
  const getUsers = useCallback(
    async (offset: number): Promise<User[]> => {
      const result = await axiosWrapper(
        'get',
        `${APP_URL}/users?offset=${offset}`,
      );
      console.log('what is this', result?.data);
      return result?.data.users;
    },
    [axiosWrapper],
  );

  return {
    getUsers,
  };
};
