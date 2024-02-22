'use client'
import PostItem from "@/pages/post-item";
import { useEffect, useState } from "react";
import { fetcher } from "@/utils/fetcher";
import { PostItemType, Posts } from "@/pages/post-item/types";

export default function Home() {
  const [posts, setPosts] = useState<PostItemType[]>([])

  const fetchPost = async () => {
    fetcher<Posts>('/api/posts')
    .then((post) => {
      setPosts(post.data)
    })
    .catch((error) => {
      console.error("Can't fetch posts", error)
    })
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
      <>
        {posts.map((post, idx) => (
          <PostItem key={post.id} post={post}/>
        ))}
      </>

    </div>
  );
}
