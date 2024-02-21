'use client'
import Image from "next/image";
import RobotPost from "~/assets/thumb-post-2.png"
import { MdDateRange } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import PostItem from "@/pages/post-item";
import { useEffect, useState } from "react";
import { fetcher } from "@/utils/fetcher";

export interface PostItem {
  title: string
}

export default function Home() {
  const [posts, setPosts] = useState([])

  const fetchPost = async () => {
    const response = await fetcher<PostItem>('/api/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log("post", response)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div className="container mx-auto w-full px-4 md:w-[60%]">
      <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a href="#" className="inline-block font-bold relative p-1 text-lightMainText dark:text-lightPrimary rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Tất cả bài viết
              <span className="after:content-[''] block after:absolute h-[4px] w-full bg-blueMain rounded-full mt-1"></span>
            </a>
          </li>
          <li className="me-2">
            <a href="#" className="inline-block text-blueSecondary relative p-1 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">CTDL & GT
            </a>
          </li>
          <li className="me-2">
            <a href="#" className="inline-block text-blueSecondary relative p-1 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Coding
            </a>            
          </li>
          <li className="me-2">
            <a href="#" className="inline-block text-blueSecondary relative p-1 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Database
            </a>            
          </li>
        </ul>
      </div>

      <PostItem />
      <PostItem />
      <PostItem />

    </div>
  );
}
