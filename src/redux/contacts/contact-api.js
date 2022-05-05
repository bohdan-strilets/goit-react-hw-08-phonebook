import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),

  tagTypes: ['Contacts'],

  endpoints(build) {
    return {
      // Get a list of all contacts
      getContacts: build.query({
        query: () => ({ url: '/contacts', method: 'get' }),
      }),

      // Delete selected contact
      deleteContact: build.mutation({
        query: contactId => ({
          url: `/contacts/${contactId}`,
          method: 'delete',
        }),
        providesTags: ['Contacts'],
      }),

      // Create a new contact
      createContact: build.mutation({
        query: newContact => ({
          url: '/contacts',
          method: 'post',
          data: newContact,
        }),
        providesTags: ['Contacts'],
      }),

      // Edit a existing contact
      changeContact: build.mutation({
        query: ({ contactId, ...contact }) => ({
          query: `/contacts/${contactId}`,
          method: 'patch',
          data: contact,
        }),
        providesTags: ['Contacts'],
      }),
    };
  },
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useChangeContactMutation,
} = contactApi;
