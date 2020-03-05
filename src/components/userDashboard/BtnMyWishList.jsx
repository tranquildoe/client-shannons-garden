import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./../../auth/UserContext";

export default function Button() {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) return null;
  return (
    <Link
      className="button mySeedListBtn"
      to={`/user/${currentUser._id}/wishlist`}
    >
      My Wish List
    </Link>
  );
}
