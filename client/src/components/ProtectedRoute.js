import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  if (localStorage.getItem("token")) {
    return <div>{props.children}</div>;
  } else {
    return <Navigate to="/login"/>
  }
}
