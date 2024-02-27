import { useEffect, useState } from "react";
import { PostItemType, Posts } from "@/pages/posts/types";
import PostItem from "./post-item";
import { fetcher } from "@/utils/fetcher";

const Post = ({cate}: {cate?: string}) => {
    const [posts, setPosts] = useState<PostItemType[]>([])
    const fetchPosts = async () => {
        let urlPost = `/api/posts`;
        if (cate) {
            urlPost = `/api/posts?${new URLSearchParams({
                "category": cate || ""
            })}`
        }
        fetcher<Posts>(urlPost)
            .then((posts) => {
            setPosts(posts.data)
        })
        .catch((error) => {
            console.error("Can't fetch posts", error)
        })
    }

    useEffect(() => {
        fetchPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cate])

    return (
        <>
            {posts && posts.length > 0 && posts.map((post) => <PostItem key={post.id} post={post} />)}
        </>
    )
}

export default Post