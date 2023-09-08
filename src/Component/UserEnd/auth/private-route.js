import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/UserUseAuth";
export default function UserPrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/user-auth" />;
}
