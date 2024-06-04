import React from "react";
import { IBadgeButton } from "@/interfaces/IBadgeButton";

const BadgeButton = ({ color, text }: IBadgeButton) => {
  return (
    <span
      className={
        "inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-800 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10"
      }
    >
      {text}
    </span>
  );
};

export default BadgeButton;
