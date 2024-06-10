"use client";

import {
  ArrowTopRightOnSquareIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import BadgeButton from "./BadgeButton";
import { ITool } from "@/interfaces/ITool";
import Image from "next/image";
import { incrementLikes } from "@/actions/incrementLikes";

const ToolCard = ({
  id,
  name,
  url,
  image_uri,
  likes,
  categories,
}: ITool): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="rounded-lg min-w-64 w-64 overflow-hidden shadow-lg dark:shadow-none dark:border-2 dark:border-gray-800">
      <Image src={image_uri} alt="Tool Image" width={256} height={256} />
      <div className="px-4 py-4">
        <div className="font-bold text-2xl text-black dark:text-white">
          {name}
        </div>
      </div>
      <div className="flex items-center px-4 pb-2 gap-2 flex-wrap">
        {categories?.map((category, index): any => {
          return (
            <BadgeButton
              key={index}
              style={
                "inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-800 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10"
              }
              text={"# " + category}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-between px-4 my-2">
        <div className="flex items-center gap-1">
          {true ? (
            isClicked ? (
              <HeartIconSolid
                className="w-7 h-7 text-red-500 cursor-pointer"
                onClick={async () => {
                  console.log("clicked", id);
                  const res = await incrementLikes(1, likes);
                  setIsClicked(!isClicked);
                  if (res) {
                    console.log(res);
                  }
                }}
              />
            ) : (
              <HeartIcon
                className="w-7 h-7 text-red-500 cursor-pointer"
                onClick={() => setIsClicked(!isClicked)}
              />
            )
          ) : (
            <HeartIconSolid className="w-7 h-7 text-gray-500 cursor-pointer" />
          )}

          <p className="text-black dark:text-white font-bold text-sm">
            {likes?.length}
          </p>
        </div>

        <Link href={url} target="_blank">
          <ArrowTopRightOnSquareIcon className="w-8 h-8 text-gray-400 dark:text-gray-600 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
