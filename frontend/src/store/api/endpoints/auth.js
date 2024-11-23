import { addUser } from "../../slices/userInfo";
import baseApi from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => ({
        url: `/login`,
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addUser(data?.data));
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      },
      invalidatesTags: ["auth"],
    }),
    register: builder.mutation({
      query: (payload) => ({
        url: `/register`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
