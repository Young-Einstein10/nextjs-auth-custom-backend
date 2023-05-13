import axios from "@/lib/axios";
import { AxiosError } from "axios";
import { signIn, useSession } from "next-auth/react";

interface IToken {
  accessToken: string;
  refreshToken: string;
}

export const useRefreshToken = () => {
  const { data: session, update } = useSession();

  const refreshToken = async () => {
    try {
      const res = await axios.post(
        "/auth/refresh-token",
        {
          refreshToken: session?.user.refreshToken,
        },
        {
          headers: {
            Authorization: `Bearer ${session?.user.accessToken}`,
          },
        }
      );

      if (!session) {
        return signIn();
      }

      const { accessToken, refreshToekn } = res.data;
      // Update global session with new tokens
      update({ accessToken, refreshToekn });

      return res.data as IToken;
    } catch (error) {
      const axiosError = error as AxiosError;
      // Any error getting new tokens, user signs in again
      if (axiosError.response?.status === 401) {
        return signIn();
      }
    }
  };
  return refreshToken;
};
