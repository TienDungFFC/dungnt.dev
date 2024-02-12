import { NextResponse } from "next/server"
import { fetcher } from "@/utils/fetcher"

const DATA_SOURCE_URL = process.env.API_BLOG_HOST || "http://localhost:8081"

export interface Post {
    title: string;
    description: string;
    content: string;
}

export const POST = async (request: Request) => {
    try {
        const req = await request.json()

        const post = await fetcher(DATA_SOURCE_URL, {
            method: "POST",
            body: JSON.stringify({
                title: req.title,
                content: req.content,
                status: 1,
                tags: req.tags,
                category: req.category,
                thumb: req.thumb
            })
        })
        return new NextResponse(JSON.stringify(post), {status: 200}) 
    } catch(err) {
        console.log("error: ", err)
        return new NextResponse(JSON.stringify({message: "Something went wrong"}), {status: 500}) 
    }
}