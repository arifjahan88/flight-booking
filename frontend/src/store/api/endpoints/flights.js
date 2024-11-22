import baseApi from "../baseApi";

export const flightsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addflights: builder.mutation({
      query: (payload) => ({
        url: `/flights`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["flights"],
    }),

    getflights: builder.query({
      query: () => ({
        url: `/flights`,
        method: "GET",
      }),
      providesTags: ["flights"],
    }),

    getflightssearch: builder.query({
      query: () => ({
        url: `/flights/search`,
        method: "GET",
      }),
      providesTags: ["flights"],
    }),

    getflightsid: builder.query({
      query: (id) => ({
        url: `/bookings/user/${id}`,
        method: "GET",
      }),
      providesTags: ["flights"],
    }),

    deleteflights: builder.mutation({
      query: (id) => ({
        url: `/flights/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["flights"],
    }),

    updateflights: builder.mutation({
      query: ({ id, data }) => ({
        url: `/flights/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["flights"],
    }),
  }),
});

export const {
  useAddflightsMutation,
  useDeleteflightsMutation,
  useGetflightsQuery,
  useGetflightsidQuery,
  useGetflightssearchQuery,
  useUpdateflightsMutation,
} = flightsApi;
