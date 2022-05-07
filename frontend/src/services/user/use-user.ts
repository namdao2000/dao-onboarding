import { DiaryPage } from '../../types/diary-page';
import { useCallback } from 'react';
import { axiosWrapper } from '../axios/axios.wrapper';
import { APP_URL } from '../../utils/constants';

export interface IUseUserReturn {
  getUsers: (offset: number) => Promise<DiaryPage>;
}

export const useUser = (): IUseUserReturn => {
  const getUsers = useCallback(
    async (offset: number): Promise<DiaryPage> => {
      const result = await axiosWrapper(
        'get',
        `${APP_URL}/users?offset=${offset}`,
      );
      return result?.data;
    },
    [axiosWrapper],
  );

  return {
    getUsers,
  };
};
