import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./../../auth/UserContext";

export default function Button() {
    const { currentUser } = useContext(UserContext);
    if (!currentUser) return null;
    return (
      <React.Fragment>
        <Link
          className="button mySeedListBtn"
          to={`/user/${currentUser._id}/seedlist`}
        >
          My Seed List
        </Link>
      </React.Fragment>
    );

}
