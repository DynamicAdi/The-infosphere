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
import { initBanner, initToday, initFeatured, initLatest } from "./query" // Stored in different file to write all queries at one place.
import { dataProps } from "./types";



export const getPost = async (action:string): Promise<dataProps[]> => {
    let query;

    if (action === "banner") {
        query = initBanner
    }
    else if (action === "today") {
        query = initToday
    }
    else if (action === "featured") {
        query = initFeatured
    }
    else if (action === "latest") {
        query = initLatest
    }
    else {
        console.error("Invalid action passed to getPost function.")
        return []
    }
    
    const posts = await client.fetch(groq`${query}`)
    
    return posts;
}