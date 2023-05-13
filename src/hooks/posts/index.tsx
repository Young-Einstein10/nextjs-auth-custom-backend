// import api from "@/config/api";
import { useQuery } from "react-query";
import useGenericMutation from "../useGenericMutation";
import { IPostProps, IPostResponse, UpdatePostProps } from "./types";
import useApi from "../useApi";
import { useSession } from "next-auth/react";

export const useGetAllPosts = () => {
  const api = useApi();
  const { status } = useSession();
  const { data, ...rest } = useQuery(
    "posts",
    () => api.post.getAllPosts<IPostProps[]>(),
    {
      enabled: status === "authenticated",
    }
  );

  return { ...rest, data };
};

type UpdaterType = (oldData: any, newData: any) => any;

export const useUpdatePost = (postId: string) => {
  const api = useApi();
  return useGenericMutation<IPostProps, UpdatePostProps>(
    "posts",
    (data) => api.post.updatePost<IPostProps, UpdatePostProps>(postId, data),
    undefined
  );
};

export const useDeletePost = (postId: string, updater?: UpdaterType) => {
  const api = useApi();
  return useGenericMutation(
    "posts",
    (postId: string) => api.post.deletePost(postId),
    postId,
    updater
  );
};
