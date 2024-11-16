import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export const ProtectedRoute = () => {
  const { token } = useAuth();
  //로그인 미인증시
  if (!token) {
    return <Navigate to="/login" />;
  }
  //로그인 인증시
  return <Outlet />;
};
