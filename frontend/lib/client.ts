{/* 
This website is being developed by the -
================================================================
THE RD GROUP OF INDUSTRIES.

DEVELOPER - ADARSH PANDIT
DESIGNER - ADARSH PANDIT
================================================================
*/}


import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: "r0tmvcm4",
    dataset: "production",
    useCdn: false,
    apiVersion: '2024-08-26' // you can change this in future versions.
})

const builder = imageUrlBuilder(client);

export const urlFor = (source:any) => {
    return  builder.image(source);
}