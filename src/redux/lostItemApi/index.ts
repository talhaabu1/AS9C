import { baseApi } from '../baseApi';

const lostItemApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createLostItem: build.mutation({
      query: (data) => ({
        url: '/lost-item',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      }),
    }),
  }),
});

export const { useCreateLostItemMutation } = lostItemApi;
