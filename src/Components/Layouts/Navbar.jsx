import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOutUser } from "../../Config/Firebase/Firebase";

const Navbar = () => {
  const nvaigate = useNavigate();
  const handleOut = () => {
    signOutUser()
      .then(() => {
        nvaigate("/login");
        console.log("first");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-around">
      <h1>App</h1>
      <ul className="flex gap-9">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/register">register</Link>
        </li>
        <li>
          <button onClick={handleOut}>LogOut</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
