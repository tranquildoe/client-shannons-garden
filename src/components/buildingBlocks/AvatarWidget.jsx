import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function IconAvatar({ clbk }) {
  const fileInput = React.createRef();
  const [avatar, setAvatar] = useState("");

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleAvatar = e => {
    const memorizedEvent = { ...e };
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      // when the fileReader ends reading image  ...
      const baseString = reader.result;
      setAvatar(baseString);
      clbk(memorizedEvent, file, baseString);
    };
    reader.readAsDataURL(file); // read the file from the local disk
  };

  return (
    <div
      className={"is-clickable dd icon-avatar"}
      title="change avatar"
      style={{ background: `url(${avatar}` }}
    >
      <input
        ref={fileInput}
        type="file"
        className="is-hidden"
        name="avatar"
        onChange={handleAvatar}
      />
      <FontAwesomeIcon
        onClick={handleClick}
        className="is-clickable fa-lg"
        icon={faCog}
      />
    </div>
  );
}
