import { AxiosInstance, AxiosResponse } from "axios";

interface Response {}

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
