import React from "react";
import my from "../assets/images/my.png"

export default function ProfileImage() {
  return (
    <img
      src={my}
      alt="Profile"
      className="w-96 h-96 rounded-full object-cover"
    />
  );
}