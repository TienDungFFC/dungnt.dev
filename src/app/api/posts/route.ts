import { NextResponse } from "next/server"
import { fetcher } from "@/utils/fetcher"

const DATA_SOURCE_URL = "http://localhost:80801/api/posts"

export interface Post {
    title: string;
    description: string;
    content: string;
}

export const POST = async (request: Request) => {
    try {
        const req = await request.json()

        const post = await fetcher<Post>(DATA_SOURCE_URL, {
            method: "POST",
            body: JSON.stringify({
                title: req.title,
                content: req.content,
                status: 1,
            })
        })
        console.log("pos", post);
        return new NextResponse(JSON.stringify(post), {status: 200}) 
    } catch(err) {
        console.log("error: ", err)
        return new NextResponse(JSON.stringify({message: "Something went wrong"}), {status: 500}) 
    }
}