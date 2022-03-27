const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
const AUTH_EMAIL_KEY_NAME = 'six-cities-email';

export type Token = string;
export type Email = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const getEmail = (): Email => {
  const token = localStorage.getItem(AUTH_EMAIL_KEY_NAME);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const saveEmail = (email: Email): void => {
  localStorage.setItem(AUTH_EMAIL_KEY_NAME, email);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};

export const dropEmail = (): void => {
  localStorage.removeItem(AUTH_EMAIL_KEY_NAME);
};
