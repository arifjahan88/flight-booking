import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userInfo";

export const UserInfo = () => {
  const userInfo = useSelector(selectUser);
  return userInfo?.user;
};

export const UserToken = () => {
  const userInfo = useSelector(selectUser);
  return userInfo.token;
};
