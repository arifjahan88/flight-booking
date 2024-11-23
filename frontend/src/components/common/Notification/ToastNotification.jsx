import { FaCheckCircle, FaTimesCircle, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

const ToastMessage = ({ title, message, type = "success", t }) => {
  const getToastStyles = () => {
    switch (type) {
      case "success":
        return {
          icon: <FaCheckCircle className="h-6 w-6 text-green-500" />,
          titleColor: "text-green-700",
          iconBg: "bg-green-100",
        };
      case "error":
        return {
          icon: <FaTimesCircle className="h-6 w-6 text-red-500" />,
          titleColor: "text-red-700",
          iconBg: "bg-red-100",
        };
      default:
        return {
          icon: <FaCheckCircle className="h-6 w-6 text-green-500" />,
          titleColor: "text-green-700",
          iconBg: "bg-green-100",
        };
    }
  };

  const { icon, titleColor, iconBg } = getToastStyles();

  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className={`flex-shrink-0 ${iconBg} rounded-full p-2`}>{icon}</div>
          <div className="ml-3 flex-1">
            <p className={`text-xl font-bold ${titleColor}`}>{title}</p>
            <p className="mt-1 text-sm text-gray-500">{message}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <FaTimes className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ToastMessage;
