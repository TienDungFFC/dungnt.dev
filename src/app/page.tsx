'use client'
import PostItem from "@/pages/post-item";
import { useEffect, useState } from "react";
import { fetcher } from "@/utils/fetcher";
import { PostItemType, Posts } from "@/pages/post-item/types";
import Categories from "@/pages/categories";

export default function Home() {
  const [posts, setPosts] = useState<PostItemType[]>([])
  const [categories, setCategories] = useState<PostItemType[]>([])
  
  // const fetchPosts = async () => {
  //   fetcher<Posts>('/api/posts')
  //   .then((posts) => {
  //     setPosts(posts.data)
  //   })
  //   .catch((error) => {
  //     console.error("Can't fetch posts", error)
  //   })
  // }

  // useEffect(() => {
  //   fetchPosts()
  // }, [])

  return (
    <div className="container mx-auto w-full px-4 md:w-[60%]">
      <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
        <Categories />
      </div>
      <>

      </>

    </div>
  );
}
