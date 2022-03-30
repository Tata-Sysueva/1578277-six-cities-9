const EMAIL_KEY_NAME = 'six-cities-email';

export type Email = string;

export const getEmail = (): Email => {
  const email = localStorage.getItem(EMAIL_KEY_NAME);
  return email ?? '';
};

export const saveEmail = (email: Email): void => {
  localStorage.setItem(EMAIL_KEY_NAME, email);
};

export const dropEmail = (): void => {
  localStorage.removeItem(EMAIL_KEY_NAME);
};
