import { NextResponse } from "next/server"
import { fetcher } from "@/utils/fetcher"
import { useRouter } from 'next/router'

const DATA_SOURCE_URL = `${(process.env.API_BLOG_HOST || "http://localhost:8081")}/api/posts` 

export interface Post {
    title: string;
    description: string;
    content: string;
}

export const GET = async (req: any) => {
    const router = useRouter()

    try {
        const urlPost = `${DATA_SOURCE_URL}/${router.query.slug}`
        const posts = await fetch(urlPost)
        const result = await posts.json();
        return new NextResponse(JSON.stringify(result), {status: 200}) 
    } catch(err) {
        console.log("error: ", err)
        return new NextResponse(JSON.stringify({message: "Something went wrong"}), {status: 500}) 
    }
}