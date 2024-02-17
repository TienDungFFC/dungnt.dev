import { NextResponse } from "next/server"
import { fetcher } from "@/utils/fetcher"

const DATA_SOURCE_URL = `${(process.env.API_BLOG_HOST || "http://localhost:8081")}/api/posts` 

export interface Post {
    title: string;
    description: string;
    content: string;
}

export const POST = async (request: Request) => {
    try {
        const req = await request.json()
        const post = await fetch(`${DATA_SOURCE_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },          
            body: JSON.stringify({
                title: req.title,
                content: req.content,
                categoryId: req.categoryId,
                tags: req.tags,
                thumb: req.thumb,
                status: 1,
            })
        })
        const result = await post.json();
        return new NextResponse(JSON.stringify(result), {status: 200}) 
    } catch(err) {
        console.log("error: ", err)
        return new NextResponse(JSON.stringify({message: "Something went wrong"}), {status: 500}) 
    }
}

export const GET = async (request: Request) => {
    try {
        const posts = await fetch(`${DATA_SOURCE_URL}`)
        const result = await posts.json();
        return new NextResponse(JSON.stringify(result), {status: 200}) 
    } catch(err) {
        console.log("error: ", err)
        return new NextResponse(JSON.stringify({message: "Something went wrong"}), {status: 500}) 
    }
}