import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase";

const ProtectedRoute = ({ component }) => {
  const navigate = useNavigate();

  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
        return;
      }
      setIsUser(true);
    });
  }, []);

  return isUser ? component : <p>Loading...</p>;
};

export default ProtectedRoute;
