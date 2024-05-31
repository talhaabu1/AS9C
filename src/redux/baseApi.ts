import { getToken } from '@/service/auth.service';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_API}`,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('authorization', token);
      }
    },
  }),
  endpoints: () => ({}),
});
