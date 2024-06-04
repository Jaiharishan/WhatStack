import React from "react";
import BadgeButton from "./BadgeButton";

const TagsArray = [
  {
    name: "AI",
    color: "gray",
  },
  {
    name: "Web3",
    color: "red",
  },
  {
    name: "DevOps",
    color: "blue",
  },
  {
    name: "IOT",
    color: "purple",
  },
  {
    name: "Dev",
    color: "pink",
  },
  {
    name: "Hacking",
    color: "indigo",
  },
  {
    name: "Data Science",
    color: "green",
  },
];
const TagsSection = () => {
  return (
    <div className="flex items-center justify-between w-full">
      {TagsArray.map(({ name, color }, index) => {
        return <BadgeButton key={index} color={color} text={name} />;
      })}
    </div>
  );
};

export default TagsSection;
