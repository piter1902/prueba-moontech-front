export interface ConnectionLog {
  date: Date;
  user: {
    name: string;
    email: string;
  };
  isLogin: boolean;
}
