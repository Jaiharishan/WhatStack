"use client";

import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { incrementLikes } from "../actions/incrementLikes";

interface LikeButtonProps {
  isUser: boolean;
  user_id: number;
  likes: number[];
}
const LikeButton = ({ isUser, user_id, likes }: LikeButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className="flex items-center gap-1">
        {isUser ? (
          isClicked ? (
            <HeartIconSolid
              className="w-7 h-7 text-red-500 cursor-pointer"
              onClick={async () => {
                console.log("clicked", user_id);
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
    </>
  );
};

export default LikeButton;
