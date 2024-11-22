import { useDispatch } from "react-redux";
import AddButton from "../../components/common/Button/AddButton";
import { handleModal } from "../../store/slices/modalSlice";
import CommonTable from "../../components/common/CommonTable/CommonTable";
import CommonDialog from "../../components/common/Modal/CommonModal";
import CommonForm from "../../components/common/CommonForm/CommonForm";
import { FlightFormData } from "../../components/common/CommonForm/FormData";
import {
  useAddflightsMutation,
  useDeleteflightsMutation,
  useGetflightsQuery,
  useUpdateflightsMutation,
} from "../../store/api/endpoints/flights";
import TableLoader from "../../components/Loader/TableLoader";

const AllFlights = () => {
  const dispatch = useDispatch();
  const formData = FlightFormData();

  //Api call
  const [addFlights, { isLoading: AddLoading }] = useAddflightsMutation();
  const { data: AllFlights, isFetching: FlightsFetching } = useGetflightsQuery();
  const [deleteFlights, { isLoading: DeleteLoading }] = useDeleteflightsMutation();
  const [updateFlights, { isLoading: UpdateLoading }] = useUpdateflightsMutation();

  const onFormSubmit = async (data) => {
    const sendData = {
      flightname: data.flightname,
      from: data.from,
      to: data.to,
      date: data.date,
      price: data.price,
      facilities: data.facilities,
      flightclass: data.flightclass,
      imageUrl: data.imageUrl,
      rating: data.rating,
      totalseats: data.totalseats,
    };
    console.log("Send Data", sendData);

    const apiCall = data?._id
      ? await updateFlights({
          id: data?._id,
          data: sendData,
        })
      : await addFlights(sendData);

    if (apiCall?.data?.success) {
      dispatch(handleModal({ open: false }));
    }
  };

  const handleDelete = async (id) => {
    await deleteFlights(id);
  };

  const handleEdit = (data) => {
    dispatch(handleModal({ open: true, editData: data }));
  };
  return (
    <>
      <AddButton
        label="Add Flights"
        onclick={() => {
          dispatch(handleModal({ open: true }));
        }}
      />
      {FlightsFetching || DeleteLoading ? (
        <TableLoader />
      ) : (
        <CommonTable data={AllFlights?.data} onDelete={handleDelete} onEdit={handleEdit} />
      )}
      <CommonDialog
        title="Add Flights"
        handleClose={() => {
          dispatch(handleModal({ open: false }));
        }}
      >
        <CommonForm
          formData={formData}
          onSubmit={onFormSubmit}
          loading={AddLoading || UpdateLoading}
        />
      </CommonDialog>
    </>
  );
};

export default AllFlights;
