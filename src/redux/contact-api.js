import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62611516f429c20deb9a448f.mockapi.io/api/v1',
  }),
  tagTypes: ['Contacts', 'Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: '/contacts',
      }),
      providesTags: ['Contacts'],
    }),
    getContactByid: builder.query({
      query: id => ({
        url: `/contacts/${id}`,
      }),
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    changeContact: builder.mutation({
      query: ({ contactId, ...newContact }) => ({
        url: `/contacts/${contactId}`,
        method: 'PUT',
        body: newContact,
      }),
      invalidatesTags: ['Contact', 'Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetContactByidQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useChangeContactMutation,
} = contactApi;
