export interface dataProps {
    _type: string
    _createdAt: string;
    slug: { current: string; _type: string };
    title: string;
    metadescription: string;
    mainImage: { _type: string; asset: any };  // Adjust 'any' based on the actual type of the asset
    author: { name: string, bio: string };
    categories: string[];
  }

  // Define the type for the image block
export type ImageBlock = {
  _type: 'image';
  asset: {
    url: string;
  };
  alt?: string;
};

// Define the type for the link mark
export type LinkMark = {
  _type: 'link';
  href: string;
};

// Define the structure of your block content
export type BlockContent = {
  _key: string;
  _type: string;
  children: any[];
  markDefs: any[];
  style?: string;
};

// Define the type for a Post document
export interface Post {
  title: string;
  body: BlockContent[];
}
