import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { getOneUser } from "../Api/AuthApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateLogin } from "../Redux/ReduxState";
import DashLayout from "../Dashboard/Static/DashLayout";
import FirsttimeScreen from "../Auth/FirstTime/FirsttimeScreen";

const RouteChecker = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const checkingFirstlogin = useSelector((state: any) => state.firstLogin);
  const decodeUserID: any = jwtDecode(user);
  const userID = decodeUserID.id;

  const validateUser = () => {
    try {
      if (userID) {
        getOneUser(userID).then((res) => {
          if (res?.status === 200) {
            if (userID === res?.data._id) {
              if (res?.data.firstLogin === true) {
                dispatch(updateLogin());
              }
            }
          }
        });
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  useEffect(() => {
    validateUser();
  }, []);

  const userFirstLogin = checkingFirstlogin === true;

  return (
    <div>
      {userFirstLogin === true ? (
        <div>
          <DashLayout />
        </div>
      ) : (
        <div>
          <FirsttimeScreen />
        </div>
      )}
    </div>
  );
};

export default RouteChecker;
