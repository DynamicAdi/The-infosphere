// All the GROQ queries are executed from the server

export const initBanner = `*[ _type=="main" ]{title, metadescription, mainImage, categories, _createdAt, _type, slug, author->{ name, bio}}`;
export const initToday = `*[ _type=="today" ]{title, metadescription, mainImage, categories, _createdAt, _type, slug, author->{ name, bio}}`;
export const initFeatured = `*[ _type=="featured" ]{title, metadescription, mainImage, categories, _createdAt, _type, slug, author->{ name, bio}}`;
export const initLatest = `*[ _type=="post" ]{title, metadescription, mainImage, categories, _createdAt, _type, slug, author->{ name, bio}}`;
export const initFeeds = `*[ _type=="morenews" ]{title, mainImage, _createdAt, _type, slug, author->{ name, bio}}`;

// Full page Data
export const FullLatest = `*[ _type=="post" && slug.current == $slug ]`;