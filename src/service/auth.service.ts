import { decodedToken } from '@/utils/jwt';

export const getUserInfo = () => {
  const authToken = localStorage.getItem('token');
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return {
      ...decodedData,
    };
  }
  return authToken;
};

export const isLoggedIn = () => {
  const authToken = localStorage.getItem('token');

  if (authToken) {
    return !!authToken;
  }
};
