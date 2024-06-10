import React from "react";
import { IBadgeButton } from "@/interfaces/IBadgeButton";

const BadgeButton = ({ color, text }: IBadgeButton): JSX.Element => {
  return <span className={color}>{text}</span>;
};

export default BadgeButton;
