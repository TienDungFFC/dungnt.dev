import React, { useState } from 'react';
import Image from "next/image";
import RobotPost from "~/assets/thumb-post-2.png"
import { PostItemType } from './types';
import Link from 'next/link';
import PublishDate from '@/components/post/publish-date';
import ReadingMinute from '@/components/post/reading-minute';

const PostItem = ({post}: {post: PostItemType}) => {
    const PREFIX_BLOG_POST = 'blog'
    const URL_BLOG_POST = `${PREFIX_BLOG_POST}/${encodeURIComponent(post.slug)}`
    
    return (
        <div className="md:mt-[60px] mt-[40px]">
            <div className="flex-col justify-start gap-6 md:hidden">
                <div className="w-full md:w-[70%]">
                    <h1 className="text-2xl font-bold dark:text-lightPrimary text-lightMainText">
                    <Link href={URL_BLOG_POST}>
                        {post.title}
                    </Link>
                    </h1>
                    <div className="time flex justify-start items-start gap-6 my-4">
                        <PublishDate publish_at={post.updated_at}/>
                        <ReadingMinute reading_minute={5}/>
                    </div>
                    <div className="description text-lightSubText dark:text-textMain">
                        {post.description}
                    </div>
                </div>
                <div className="w-full md:w-[30%] mt-3 md:mt-0">
                <Link href={URL_BLOG_POST}>
                    <Image src={post.thumb ? post.thumb : RobotPost} className="w-full" alt={`Mastering React Components: Building Reusable and Well-Organized UIs`}/>
                </Link>
                </div>
            </div>

            <div className="hidden md:flex justify-start gap-6">
                <div className="w-full md:w-[70%]">
                    <Link href={URL_BLOG_POST}>
                        <h1 className="text-2xl font-bold dark:text-lightPrimary text-lightMainText">
                            {post.title}
                        </h1>
                    </Link>

                    <div className="time flex justify-start items-start gap-6 my-4">
                        <PublishDate publish_at={post.updated_at}/>
                        <ReadingMinute reading_minute={5}/>
                    </div>
                    <div className="description text-lightSubText dark:text-textMain">
                        {post.description}
                    </div>
                </div>
                <div className="w-full md:w-[30%] mt-3 md:mt-0">
                    <Link href={URL_BLOG_POST}>
                        <Image src={post.thumb ? post.thumb : RobotPost} className="w-full" alt={`Mastering React Components: Building Reusable and Well-Organized UIs`}/>
                    </Link>
                </div>
            </div>
        </div>
  );
};

export default PostItem;
