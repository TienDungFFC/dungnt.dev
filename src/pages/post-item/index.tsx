import React, { useState } from 'react';
import Image from "next/image";
import RobotPost from "~/assets/thumb-post-2.png"
import { MdDateRange } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { PostItemType } from './types';

const PostItem = ({post}: {post: PostItemType}) => {
  return (
    <div className="md:mt-[60px] mt-[40px]">
        <div className="flex-col justify-start gap-6 md:hidden">
        <div className="w-full md:w-[70%]">
            <h1 className="text-2xl font-bold dark:text-lightPrimary text-lightMainText">
            {post.title}
            </h1>
            <div className="time flex justify-start items-start gap-6 my-4">
            <div className="flex justify-start items-center">
                <MdDateRange color="#94A3B8"/><span className="ml-1 text-lightSubText dark:text-textMain">{post.updated_at}</span>
            </div>
            <div className="flex justify-start items-center">
                <MdAccessTime color="#94A3B8" /><span className="ml-1 text-lightSubText dark:text-textMain">5 phút đọc</span>
            </div>

            </div>
            <div className="description text-lightSubText dark:text-textMain">
                {post.description}
            </div>
        </div>
        <div className="w-full md:w-[30%] mt-3 md:mt-0">
            <Image src={post.thumb ? post.thumb : RobotPost} className="w-full" alt={`Mastering React Components: Building Reusable and Well-Organized UIs`}/>
        </div>
        </div>

        <div className="hidden md:flex justify-start gap-6">
        <div className="w-full md:w-[70%]">
            <h1 className="text-2xl font-bold dark:text-lightPrimary text-lightMainText">
            {post.title}
            </h1>
            <div className="time flex justify-start items-start gap-6 my-4">
            <div className="flex justify-start items-center">
                <MdDateRange color="#94A3B8"/><span className="ml-1 text-lightSubText dark:text-textMain">29/01/2024</span>
            </div>
            <div className="flex justify-start items-center">
                <MdAccessTime color="#94A3B8" /><span className="ml-1 text-lightSubText dark:text-textMain">5 phút đọc</span>
            </div>

            </div>
            <div className="description text-lightSubText dark:text-textMain">
                {post.description}
            </div>
        </div>
        <div className="w-full md:w-[30%] mt-3 md:mt-0">
            <Image src={post.thumb ? post.thumb : RobotPost} className="w-full" alt={`Mastering React Components: Building Reusable and Well-Organized UIs`}/>
        </div>
        </div>
    </div>
  );
};

export default PostItem;
