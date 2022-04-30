import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://626acddde5274e6664c35534.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: ({ name, number }) => {
        return {
          url: `/contacts`,
          method: 'POST',
          body: {
            name: name,
            number: number,
          },
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
        query: id => {
          return {
            url: `/contacts/${id}`,
            method: 'DELETE',
          }
        },
        invalidatesTags: ['Contacts'],
      }),
  }),
});

export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;
