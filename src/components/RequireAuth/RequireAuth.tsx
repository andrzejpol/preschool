import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }: any) => {
  const isAuthenticated = true;
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
