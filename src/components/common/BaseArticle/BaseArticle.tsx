/* eslint-disable no-var */
import React, { useMemo, useState } from 'react';
import { Dates } from '@app/constants/Dates';
// import { BaseHashTag, IHashTag } from '../BaseHashTag/BaseHashTag';
// import { BaseImage } from '../BaseImage/BaseImage';
// import { BaseAvatar } from '../BaseAvatar/BaseAvatar';
import * as S from './BaseArticle.styles';
import { Modal } from 'antd';
import { EChartsOption } from 'echarts-for-react';
import { BaseChart } from '../charts/BaseChart';
import { useAppSelector } from '@app/hooks/reduxHooks';

export interface BaseArticleProps {
  // author?: React.ReactNode;
  // imgUrl: string;
  title: string;
  date: number;
  description: string;
  // avatar?: string;
  // tags?: IHashTag[];
  className?: string;
  chart?: { name: string; task: number; issue: number }[];
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
  chart,
}) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const groupName = chart?.map((item) => item.name);
  const groupTask = chart?.map((item) => item.task);
  const groupIssue = chart?.map((item) => item.issue);

  const colorTheme = theme === 'dark' ? 'white' : 'black';
  const color = useMemo(() => {
    return stringToColour(title);
  }, [title]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const option = {
    title: {
      text: title,
      textStyle: {
        color: colorTheme,
        fontSize: 25,
      },
      // subtext: 'Living Expenses in Shenzhen',
    },
    color: ['#5470C6', '#EE6766'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['Task', 'Issue'],
      textStyle: {
        color: colorTheme,
        fontSize: 20,
      },
    },
    toolbox: {
      show: false,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack'] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: groupName,
        axisLabel: {
          color: colorTheme,
          fontSize: 20,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        interval: 2,
      },
    ],
    series: [
      {
        name: 'Task',
        type: 'bar',
        barGap: 0.1,
        label: {
          show: true,
          fontWeight: 'bold',
          fontSize: 15,
        },

        emphasis: {
          focus: 'series',
        },
        data: groupTask,
      },
      {
        name: 'Issue',
        type: 'bar',
        label: {
          show: true,
          fontWeight: 'bold',
          fontSize: 15,
        },
        emphasis: {
          focus: 'series',
        },
        data: groupIssue,
      },
    ],
  };

  return (
    <>
      <S.Wrapper
        className={className}
        color={color}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
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
      <Modal
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        footer={false}
        width={1000}
      >
        <BaseChart option={option} />
      </Modal>
    </>
  );
};
