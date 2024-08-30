export interface dataProps {
    _createdAt: string;
    slug: { current: string; _type: string };
    title: string;
    metadescription: string;
    mainImage: { _type: string; asset: any };  // Adjust 'any' based on the actual type of the asset
    author: { _ref: string; _type: string };
    categories: string[];
  }