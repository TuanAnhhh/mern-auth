import Avatar from "../Avatar/Avatar";
import "./appbar.scss";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import axios from "axios";
const Appbar = () => {
  const { dispatch } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/api/auth/signout");
      localStorage.removeItem("_appSignging");
      dispatch({ type: "SIGNOUT" });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="appbar">
      <div className="appbar_wrapper">
        {/* logo */}
        <div className="appbar_logo">
          <img src="./assets/img/shuttle.svg" alt="logo" />
          <p>mernauth</p>
        </div>
        {/* avatar */}
        <div className="appbar_avatar">
          <Avatar />
        </div>
        <button type="button" onClick={handleClick}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Appbar;
