import { showToast } from "../components/hooks/showToast";
import { UserInfo } from "../components/hooks/useUserInfo";
import TableLoader from "../components/Loader/TableLoader";
import { useDeletebookingMutation, useGetbookinguserQuery } from "../store/api/endpoints/booking";

const UserBookings = () => {
  const { fullname, email, phone, _id } = UserInfo();

  //Api Call
  const { data, isFetching } = useGetbookinguserQuery(_id);
  const [deleteBooking] = useDeletebookingMutation();

  const handleDelete = async (id) => {
    const res = await deleteBooking(id);
    if (res?.data?.success) {
      showToast.success(res?.data?.message);
    }
  };

  const renderContent = () => {
    if (isFetching) {
      return <TableLoader />;
    }

    if (!data?.data?.length) {
      return <p className="text-center p-5">No Bookings Found</p>;
    }

    return (
      <div className="flex flex-wrap gap-5">
        {data.data.map((item) => (
          <div
            key={item?._id}
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-xs relative"
          >
            <img
              alt="Booking Image"
              src={
                "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              }
              className="h-48 w-full object-cover"
            />
            <button
              onClick={() => handleDelete(item?._id)}
              className="absolute z-0 top-0 right-0 text-white p-1.5 rounded-bl-md bg-red-500"
            >
              Delete
            </button>
            <div className="bg-white p-4 sm:p-6">
              <time dateTime={"itemDate"} className="block text-xs text-gray-500">
                {item?.flight?.from} ~ {item?.flight?.to}
              </time>
              <h3 className="mt-0.5 text-lg text-gray-900">{item?.flight?.flightname}</h3>
              <strong>Cost: {item?.flight?.price}</strong>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="pt-20 py-5 bg-white bg-opacity-70">
      <div className="container mx-auto overflow-hidden rounded-sm shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="px-4 text-center">
          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white">{fullname}</h3>
            <p className="font-medium">{email}</p>
            <p className="font-medium">{phone}</p>
          </div>
        </div>
        {renderContent()}
      </div>
    </section>
  );
};

export default UserBookings;
