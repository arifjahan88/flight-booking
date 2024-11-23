import { useDispatch } from "react-redux";
import CommonTable from "../../components/common/CommonTable/CommonTable";
import { handleModal } from "../../store/slices/modalSlice";
import CommonDialog from "../../components/common/Modal/CommonModal";
import { useDeletebookingMutation, useGetbookingQuery } from "../../store/api/endpoints/booking";
import TableLoader from "../../components/Loader/TableLoader";

const AllBookings = () => {
  const dispatch = useDispatch();

  //Api Call
  const { data: AllBookings, isFetching: BookingsFetching } = useGetbookingQuery();
  const [deleteBookings, { isLoading: DeleteLoading }] = useDeletebookingMutation();

  const handleDelete = async (id) => {
    await deleteBookings(id);
  };
  return (
    <>
      {BookingsFetching || DeleteLoading ? (
        <TableLoader />
      ) : (
        <CommonTable data={AllBookings?.data} onDelete={handleDelete} hiddenKeys={["flightId"]} />
      )}
      <CommonDialog
        title="Add Bookings"
        handleClose={() => {
          dispatch(handleModal({ open: false }));
        }}
      />
    </>
  );
};

export default AllBookings;
