import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />
  } else
  return <Navigate to="/movies" replace />
}
export default ProtectedRoute;
