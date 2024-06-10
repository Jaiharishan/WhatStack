import React from "react";
import BadgeButton from "./BadgeButton";

const TagsArray = [
  {
    name: "AI",
    color: "gray",
  },
  {
    name: "Web3",
    color: "gray",
  },
  {
    name: "DevOps",
    color: "gray",
  },
  {
    name: "IOT",
    color: "gray",
  },
  {
    name: "Dev",
    color: "gray",
  },
  {
    name: "Hacking",
    color: "gray",
  },
  {
    name: "Data Science",
    color: "gray",
  },
];

const classNames = TagsArray.map(({ name, color }, index) => {
  return `inline-flex items-center rounded-md bg-${color}-50 dark:bg-${color}-800 px-2 py-1 text-sm font-medium text-${color}-600 dark:text-${color}-300 ring-1 ring-inset ring-${color}-500/10`;
});

const TagsSection = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between w-full">
      {TagsArray.map(({ name, color }, index) => {
        return (
          <BadgeButton
            key={index}
            style={classNames[index]}
            text={"# " + name}
          />
        );
      })}
    </div>
  );
};

export default TagsSection;
