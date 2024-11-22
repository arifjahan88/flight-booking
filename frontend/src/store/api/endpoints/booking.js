import baseApi from "../baseApi";

export const bookingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addbooking: builder.mutation({
      query: (payload) => ({
        url: `/bookings`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["booking"],
    }),

    getbooking: builder.query({
      query: () => ({
        url: `/bookings`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    getbookinguser: builder.query({
      query: (id) => ({
        url: `/bookings/user/${id}`,
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    deletebooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["booking"],
    }),

    updatebooking: builder.mutation({
      query: ({ id, data }) => ({
        url: `/bookings/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["booking"],
    }),
  }),
});

export const {
  useAddbookingMutation,
  useDeletebookingMutation,
  useGetbookingQuery,
  useGetbookinguserQuery,
  useUpdatebookingMutation,
} = bookingsApi;
