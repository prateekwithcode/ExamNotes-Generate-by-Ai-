import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getCurrentUser} from "./services/api.js"

export const serverUrl = "http://localhost:8000";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);

  const {userData} = useSelector((state)=>state.user)
  console.log(userData)
  return (
    <> 
      <Routes>
        <Route path="/" element={userData?<Home />:<Navigate to="/auth" replace/>} />
        <Route path="/auth" element={userData ? <Navigate to="/" replace/>:<Auth />} />
      </Routes>
    </>
  );
}

export default App;
