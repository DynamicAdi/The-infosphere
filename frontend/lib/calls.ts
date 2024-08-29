{/* 
This website is being developed by the -
================================================================
THE RD GROUP OF INDUSTRIES.

DEVELOPER - ADARSH PANDIT
DESIGNER - ADARSH PANDIT
================================================================
*/}


import { groq } from "next-sanity";
import { client } from "./client" // initalizes the client
import { initPosts } from "./query" // Stored in different file to write all queries at one place.

export const getPost = async () => {
    const posts = await client.fetch(groq`${initPosts}`)
    return posts;
}