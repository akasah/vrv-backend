export type TLogin = {
  userToken: string;
  userId: string;
};

export type TSignup = {
  username: string;
  password: string;
  role: string;
};

export type TLoginReturn = {
  message: string;
  userId?: string;
  username?: string;
};
