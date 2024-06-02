import { baseApi } from '../baseApi';

const foundItemApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFoundItem: build.mutation({
      query: (data) => ({
        url: '/found-item',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      }),
    }),
  }),
});

export const { useCreateFoundItemMutation } = foundItemApi;
