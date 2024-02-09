import { NextResponse } from "next/server"
import { fetcher } from "@/utils/fetcher"

const DATA_SOURCE_URL = process.env.API_BLOG_HOST || "http://localhost:8081"

export const GET = async (request: Request) => {
    try {
        const response = await fetch(`http://localhost:8081/api/categories`)
        const categories = await response.json()
        return new NextResponse(categories, {status: 200}) 
    } catch(err) {
        console.log("error: ", err)
        return new NextResponse(JSON.stringify({message: "Something went wrong"}), {status: 500}) 
    }
}