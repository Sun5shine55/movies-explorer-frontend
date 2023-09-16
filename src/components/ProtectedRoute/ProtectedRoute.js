import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ element: Component, isLoggedIn  }) {
    return (
      isLoggedIn ? <Component /> : <Navigate to="/" replace/>
    )
}
