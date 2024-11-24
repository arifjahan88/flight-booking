import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../../store/slices/userInfo";
import { UserInfo } from "../hooks/useUserInfo";
import logo from "../../assets/images/logo-text.png";

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = UserInfo();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"}>
              <img src={logo} alt="logo" className="w-36" />
            </Link>
          </Typography>
          {userInfo ? (
            <>
              {userInfo?.role === "admin" ? (
                <Button color="inherit">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              ) : (
                <Button color="inherit">
                  <Link to="/user-bookings">My Bookings</Link>
                </Button>
              )}

              <Button
                onClick={() => {
                  dispatch(addUser({}));
                }}
                color="inherit"
              >
                Log Out
              </Button>
            </>
          ) : (
            <Button color="inherit">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
