import { Navigate } from "react-router-dom";

function ProtectedRoute({ element, isLoggedIn, ...props }) {
  return isLoggedIn ? element : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
