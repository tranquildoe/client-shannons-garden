import React from "react";

export default function AvatarImg({ src }) {
  return (
    <div className="avatarHolder" style={{background:  `url('${src}')`}} />
  );
}
