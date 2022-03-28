export type AuthData = {
  email: string,
  password: string,
};

export enum AuthStatus {
  auth ='auth',
  noAuth = 'noAuth',
  undefined = 'undefined',
}
