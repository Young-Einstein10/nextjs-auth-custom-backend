import { AxiosInstance, AxiosResponse } from "axios";

interface Response {}

export type IUserData = {
  id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  sex?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
};

class Auth {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  login(body: { email: string; password: string }) {
    return this.client.post<{ message: string; data: Response }>(
      "/auth/login/",
      body
    );
  }
}

export default Auth;
