import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import { hideLoading, showLoading } from "../redux/alertsSlice";

export default function ProtectedRoute(props) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const getUser = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.post(
        "/api/user/get-user-info-by-id",
        {
          token: localStorage.getItem("token"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading())
      if (response.data.success){
          dispatch(setUser(response.data.data))
      } else {
        localStorage.clear()
        navigate("/login")
      }
    } catch (error) {
      dispatch(hideLoading())
      localStorage.clear()
      navigate("/login")
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  if (localStorage.getItem("token")) {
    return <div>{props.children}</div>;
  } else {
    return <Navigate to="/login" />;
  }
}
