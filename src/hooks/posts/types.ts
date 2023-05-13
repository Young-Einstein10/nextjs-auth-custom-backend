import { IPaginationProps } from "@/utils/types";

interface IPostResponse extends IPaginationProps {
  results: IPostProps[];
}

type IPostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type UpdatePostProps = { status: string };

interface PostParams {
  limit?: number;
  offset?: number;
}

export type { IPostResponse, IPostProps, UpdatePostProps, PostParams };
