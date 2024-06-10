import React from "react";
import { IBadgeButton } from "@/interfaces/IBadgeButton";

const BadgeButton = ({ style, text }: IBadgeButton): JSX.Element => {
  return <span className={style}>{text}</span>;
};

export default BadgeButton;
