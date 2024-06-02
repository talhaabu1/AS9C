import { decodedToken } from '@/utils/jwt';

export const getUserInfo = () => {
  let authToken;
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    authToken = localStorage.getItem('token');
    if (authToken) {
      const decodedData = decodedToken(authToken);
      return {
        ...decodedData,
      };
    }
  }
  return authToken;
};

export const isLoggedIn = () => {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const authToken = localStorage.getItem('token');
    return !!authToken;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('token') as string);
  }
  return null;
};
