import * as React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import GatsbyImage from '../gatsby-image';
import {
  ImageCardWrapper,
  PostPreview,
  PostDetails,
  PostTitle,
  PostTags,
  PostMeta,
  ReadMore,
  Excerpt,
} from './image-card.style';

interface ImageCardProps {
  image?: any;
  title: string;
  description?: string;
  url: string;
  tags?: [];
  className?: string;
}

const ImageCard: React.FunctionComponent<ImageCardProps> = ({
  image,
  title,
  description,
  url,
  tags,
  className,
  ...props
}) => {
  const addClass = ['featured_card'];

  if (className) {
    addClass.push(className);
  }

  return (
    <ImageCardWrapper className={addClass.join(' ')} {...props}>
      {image == null ? null : (
        <PostPreview className="post_preview">
          <Link to={url}>
            <GatsbyImage src={image} alt="post preview" />
          </Link>
        </PostPreview>
      )}

      <PostDetails className="post_details">
        {tags == null ? null : (
          <PostMeta>
            <PostTags className="post_tags">
              {tags.map((tag: string, index: number) => (
                <Link key={index} to={`/tags/${_.kebabCase(tag)}/`}>
                  {`#${tag}`}
                </Link>
              ))}
            </PostTags>{' '}
          </PostMeta>
        )}

        <PostTitle className="post_title">
          <Link to={url}>{title}</Link>
        </PostTitle>
        {description && (
          <Excerpt
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            className="excerpt"
          />
        )}

        <ReadMore className="read_more">
          <Link to={url}>Read More</Link>
        </ReadMore>
      </PostDetails>
    </ImageCardWrapper>
  );
};

export default ImageCard;
