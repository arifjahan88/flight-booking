import { useDispatch } from "react-redux";
import AddButton from "../../components/common/Button/AddButton";
import CommonTable from "../../components/common/CommonTable/CommonTable";
import { handleModal } from "../../store/slices/modalSlice";
import CommonDialog from "../../components/common/Modal/CommonModal";

const AllBookings = () => {
  const dispatch = useDispatch();
  return (
    <>
      <AddButton
        label="Add Booking"
        onclick={() => {
          dispatch(handleModal({ open: true }));
          console.log("Add Booking");
        }}
      />
      <CommonTable />
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
