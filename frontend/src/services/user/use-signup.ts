import { useCallback, useState } from 'react';
import { axiosWrapper } from '../axios/axios.wrapper';
import { APP_URL } from '../../utils/constants';
import { useAuthState } from '../auth/auth-state-provider';

export interface SignupArgs {
  discord_username: string;
  user_role: string;
}

export const useSignup = (): {
  signup: ({
    signupArgs,
    onSuccess,
  }: {
    signupArgs: SignupArgs;
    onSuccess: () => void;
  }) => Promise<void>;
  loading: boolean;
} => {
  const [loading, setLoading] = useState(false);

  const { setUserLoggedIn } = useAuthState();

  const signup = useCallback(
    async ({ signupArgs, onSuccess }): Promise<void> => {
      setLoading(true);
      const response = await axiosWrapper(
        'post',
        `${APP_URL}/signup`,
        signupArgs,
      );
      if (response) {
        setUserLoggedIn(response.data.user, response.data.token);
        onSuccess();
      }
      setLoading(false);
    },
    [],
  );

  return {
    signup,
    loading,
  };
};
