import React from "react";
import BadgeButton from "./BadgeButton";

const TagsArray = [
  {
    name: "AI",
    color:
      "inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-800 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10",
  },
  {
    name: "Web3",
    color:
      "inline-flex items-center rounded-md bg-red-50 dark:bg-red-800 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10",
  },
  {
    name: "DevOps",
    color:
      "inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-800 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10",
  },
  {
    name: "IOT",
    color:
      "inline-flex items-center rounded-md bg-puple-50 dark:bg-purple-800 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10",
  },
  {
    name: "Dev",
    color:
      "inline-flex items-center rounded-md bg-pink-50 dark:bg-pink-800 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10",
  },
  {
    name: "Hacking",
    color:
      "inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-800 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10",
  },
  {
    name: "Data Science",
    color:
      "inline-flex items-center rounded-md bg-green-50 dark:bg-green-800 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10",
  },
];

const TagsSection = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between w-full">
      {TagsArray.map(({ name, color }, index) => {
        return <BadgeButton key={index} color={color} text={"# " + name} />;
      })}
    </div>
  );
};

export default TagsSection;
