/* eslint-disable no-var */
import React, { useMemo } from 'react';
import { Dates } from '@app/constants/Dates';
// import { BaseHashTag, IHashTag } from '../BaseHashTag/BaseHashTag';
// import { BaseImage } from '../BaseImage/BaseImage';
// import { BaseAvatar } from '../BaseAvatar/BaseAvatar';
import * as S from './BaseArticle.styles';

export interface BaseArticleProps {
  // author?: React.ReactNode;
  // imgUrl: string;
  title: string;
  date: number;
  description: string;
  // avatar?: string;
  // tags?: IHashTag[];
  className?: string;
}
const stringToColour = function (str: string) {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
};

export const BaseArticle: React.FC<BaseArticleProps> = ({
  // imgUrl,
  title,
  date,
  description,
  // author,
  // avatar,
  // tags,
  className,
}) => {
  const color = useMemo(() => {
    return stringToColour(title);
  }, [title]);
  return (
    <S.Wrapper className={className} color={color}>
      {/* <S.Header> */}
      {/* {!!avatar && <BaseAvatar src={avatar} alt="author" size={43} />} */}
      {/* <S.AuthorWrapper> */}
      {/* {author && <S.Author>{author}</S.Author>} */}
      {/* <S.DateTime>{Dates.format(date, 'L')}</S.DateTime> */}
      {/* </S.AuthorWrapper> */}
      {/* </S.Header> */}
      {/* <BaseImage src={imgUrl} alt="article" preview={false} /> */}
      <S.InfoWrapper>
        <S.DateTime>{Dates.format(date, 'L')}</S.DateTime>
        <S.InfoHeader>
          <S.Title dangerouslySetInnerHTML={{ __html: title }}></S.Title>
        </S.InfoHeader>
        <S.Description
          style={{ whiteSpace: 'pre-line' }}
          dangerouslySetInnerHTML={{ __html: description }}
        ></S.Description>
      </S.InfoWrapper>

      {/* {!!tags?.length && (
        <S.TagsWrapper>
          {tags.map((tag) => (
            <BaseHashTag key={tag.bgColor} title={tag.title} bgColor={tag.bgColor} />
          ))}
        </S.TagsWrapper>
      )} */}
    </S.Wrapper>
  );
};
