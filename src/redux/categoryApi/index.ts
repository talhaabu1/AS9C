import { getToken } from '@/service/auth.service';
import { baseApi } from '../baseApi';

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategory: build.mutation({
      query: (data) => ({
        url: 'category',
        method: 'POST',
        body: data,
      }),
    }),
    getAllCategories: build.query({
      query: () => ({
        url: '/categories',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoryApi;
