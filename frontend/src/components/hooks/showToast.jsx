import toast from "react-hot-toast";
import ToastMessage from "../common/Notification/ToastNotification";

export const showToast = {
  success: (message) => {
    toast.custom((t) => <ToastMessage t={t} type="success" title={"Success!"} message={message} />);
  },
  error: (message) => {
    toast.custom((t) => <ToastMessage t={t} type="error" title={"Error!"} message={message} />);
  },
};
