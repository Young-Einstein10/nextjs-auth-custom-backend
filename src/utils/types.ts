import { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout = NextPage & {
  isAuthPage?: boolean;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export interface UploadedImageProps {
  [key: string]: File | object | undefined;
}

export interface IPaginationProps {
  count: number;
  next: string;
  prev: string;
}
