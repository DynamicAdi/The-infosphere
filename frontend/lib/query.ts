// All the GROQ queries are executed from the server

export const initBanner = `*[ _type=="main" ]{title, metadescription, mainImage, author, categories, _createdAt, slug}`
export const initToday = `*[ _type=="today" ]{title, metadescription, mainImage, author, categories, _createdAt, slug}`
export const initFeatured = `*[ _type=="featured" ]{title, metadescription, mainImage, author, categories, _createdAt, slug}`
export const initLatest = `*[ _type=="post" ]{title, metadescription, mainImage, author, categories, _createdAt, slug}`


// export const init = `*[ _type=="post" ]{title, metadescription, mainImage, author, author, _createdAt, _id}`

// export const internalPosts = `*[ _type=="post" ]`