import { createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';

const axioApi = axios.create({
   baseURL: `https://www.anapioficeandfire.com/api/`
});

const axiosBaseQuery =
   (
      { baseUrl }: { baseUrl: string } = { baseUrl: '' }
   ): BaseQueryFn<
      {
         url: string;
         method: AxiosRequestConfig['method'];
         data?: AxiosRequestConfig['data'];
         params?: AxiosRequestConfig['params'];
      },
      unknown,
      unknown
   > =>
   async ({ url, method, data, params }) => {
      try {
         const result = await axios({ url: baseUrl + url, method, data, params });
         return { data: result.data };
      } catch (axiosError) {
         let err = axiosError as AxiosError;
         return {
            error: {
               status: err.response?.status,
               data: err.response?.data || err.message
            }
         };
      }
   };

export const booksApi = createApi({
   baseQuery: axiosBaseQuery({
      baseUrl: 'https://www.anapioficeandfire.com/api/'
   }),
   endpoints(build) {
      return {
         getBooks: build.query({
            query: (pageParam) => ({
               url: `books/?page=${pageParam}`,
               method: 'get'
            })
         }),
         getCharacters: build.query({ query: () => ({ url: 'characters', method: 'get' }) })
      };
   }
});

const getBooks = async (pageParam: Number) => {
   const res = await axioApi.get(`/books?page=${pageParam}&pageSize=20`);
   return res.data;
};

const getCharacter = async (pageParam: Number) => {
   const res = await axioApi.get(`/characters?page=${pageParam}&pageSize=20`);
   return res;
};

const { useGetBooksQuery, useGetCharactersQuery } = booksApi;

export { getCharacter, getBooks, useGetBooksQuery, useGetCharactersQuery };
