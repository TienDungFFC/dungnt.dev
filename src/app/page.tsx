'use client'
import PostItem from "@/pages/posts/post-item";
import { useEffect, useState } from "react";
import { PostItemType, Posts } from "@/pages/posts/types";
import Categories from "@/pages/categories";
import Post from "@/pages/posts";

export default function Home() {
  const [posts, setPosts] = useState<PostItemType[]>([])
  const [cateActive, setCateActive] = useState<string>()
  
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
  const handleActiveCategory = (slug?: string) => {
    setCateActive(slug)
  }

  return (
    <div className="container mx-auto w-full px-4 md:w-[60%]">
      <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
        <Categories handleActiveCategory={handleActiveCategory} cateActive={cateActive}/>
      </div>
      <Post cate={cateActive}/>
    </div>
  );
}
