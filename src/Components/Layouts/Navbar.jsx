import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOutUser } from "../../Config/Firebase/Firebase";

const Navbar = ({ userIN, setUserIN }) => {
  const nvaigate = useNavigate();
  const handleOut = () => {
    signOutUser()
      .then(() => {
        setUserIN(null);
        nvaigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-around">
      <h1>App</h1>
      <ul className="flex gap-9">
        {userIN ? (
          <>
            {/* <li>
              <Link to="/admin">Home</Link>
            </li> */}
            <li>
              <button onClick={handleOut}>LogOut</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/register">register</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
