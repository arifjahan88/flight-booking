const UserDashboard = () => {
  return (
    <section className="pt-20 py-5 bg-white bg-opacity-70">
      <div className="container mx-auto overflow-hidden rounded-sm shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="px-4 text-center">
          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white">{"Arif"}</h3>
            <p className="font-medium">{"arif@gmail.com"}</p>
            <p className="font-medium">{"01747772723"}</p>
          </div>
        </div>
        {/* <div className="flex flex-wrap gap-5">
          {BookingsData?.data?.hotelBooking?.map((booking) => {
            return (
              <div
                key={booking?._id}
                className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-xs relative"
              >
                <img
                  alt="Booking Image"
                  src={
                    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  }
                  className="h-48 w-full object-cover"
                />
                <p
                  className={`absolute z-0 top-0 right-0 text-white p-1.5 rounded-bl-md ${
                    booking?.isBooked ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {booking?.isBooked ? "Booked" : "Pending"}
                </p>
                <div className="bg-white p-4 sm:p-6">
                  <time dateTime={"bookingDate"} className="block text-xs text-gray-500">
                    {booking?.startDate} ~ {booking?.endDate}
                  </time>
                  <h3 className="mt-0.5 text-lg text-gray-900">{booking?.hotelInfo?.hotelName}</h3>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default UserDashboard;
