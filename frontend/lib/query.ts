// All the GROQ queries are executed from the server

export const initPosts = `*[ _type=="post" ]{title, metadescription, mainImage, author, author, _createdAt, _id}`
export const internalPosts = `*[ _type=="post" ]`