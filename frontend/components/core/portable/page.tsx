import React from 'react';
import { PortableText, PortableTextReactComponents, PortableTextTypeComponentProps, PortableTextMarkComponentProps } from '@portabletext/react';
import { BlockContent, ImageBlock, LinkMark } from '@/lib/types';

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: PortableTextTypeComponentProps<ImageBlock>) => {
      return <img src={value.asset.url} alt={value.alt || 'Image'} />;
    },
  },
  marks: {
    link: ({ children, value }: PortableTextMarkComponentProps<LinkMark>) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : '_self';
      return (
        <a href={value?.href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      );
    },
  },
};

interface RichTextProps {
  blocks: BlockContent[];
}

const RichText: React.FC<RichTextProps> = ({ blocks }) => {
  return <PortableText value={blocks} components={myPortableTextComponents} />;
};

export default RichText;
