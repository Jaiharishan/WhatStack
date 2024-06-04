import React from "react";

type BadgeProps = {
  color: string;
  text: string;
};
const BadgeButton = ({ color, text }: BadgeProps) => {
  const className =
    `bg-${color}-50 dark:bg-${color}-600` +
    " " +
    "inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset dark:ring-gray-800/10 ring-gray-500/10";

  //   console.log(className);
  return <span className={className}># {text}</span>;
};

export default BadgeButton;
