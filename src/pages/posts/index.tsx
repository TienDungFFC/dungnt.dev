import { useEffect, useState } from "react";
import { PostItemType, Posts } from "@/pages/posts/types";
import PostItem from "./post-item";

const Post = ({cate}: {cate?: string}) => {
    const [posts, setPosts] = useState<PostItemType[]>([])
    useEffect(() => {
        
    }, [cate])
    return (
        <>
            {posts && posts.length > 0 && posts.map((post) => <PostItem key={post.id} post={post} />)}
        </>
    )
}

export default Post