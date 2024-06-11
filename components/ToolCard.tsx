import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React from "react";
import Link from "next/link";
import BadgeButton from "./BadgeButton";
import { ITool } from "@/interfaces/ITool";
import Image from "next/image";
import LikeButton from "./LikeButton";
import { createClient } from "@/utils/supabase/server";
import { getUser } from "@/actions/getUser";

const ToolCard = async ({
  id,
  name,
  url,
  image_uri,
  likes,
  categories,
}: ITool): Promise<JSX.Element> => {
  const user = await getUser();

  return (
    <div className="rounded-lg min-w-60 w-60 overflow-hidden shadow-lg dark:shadow-none dark:border-2 dark:border-gray-800">
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
        <LikeButton isUser={true ? user : false} user_id={id} likes={likes} />

        <Link href={url} target="_blank">
          <ArrowTopRightOnSquareIcon className="w-8 h-8 text-gray-400 dark:text-gray-600 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
