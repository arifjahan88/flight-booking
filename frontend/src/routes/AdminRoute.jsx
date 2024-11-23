import { Navigate, useLocation } from "react-router-dom";
import { UserInfo, UserToken } from "../components/hooks/useUserInfo";

const AdminRoute = ({ children }) => {
  const userData = UserInfo();
  const token = UserToken();
  const location = useLocation();

  if (!userData || !token || userData.role?.toLowerCase() !== "admin") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
