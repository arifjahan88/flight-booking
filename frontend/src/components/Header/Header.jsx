import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "../../store/slices/userInfo";
import { UserInfo } from "../hooks/useUserInfo";

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = UserInfo();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"}>Flight Booking</Link>
          </Typography>
          {userInfo ? (
            <>
              <Button color="inherit">
                <Link to="/user-bookings">My Bookings</Link>
              </Button>
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
