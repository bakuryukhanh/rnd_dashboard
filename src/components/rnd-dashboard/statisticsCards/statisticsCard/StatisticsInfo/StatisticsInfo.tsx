import React from 'react';
// import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
// import { getDifference } from 'utils/utils';
import * as S from './StatisticsInfo.styles';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

interface StatisticsInfoProps {
  name: string;
  value: number;
  prevValue: number;
  off?: string;
}
// name, value, prevValue
export const StatisticsInfo: React.FC<StatisticsInfoProps> = ({ name, off }) => {
  let health = '';
  if (off) {
    health = off;
  }
  return (
    <BaseSpace direction="vertical" size={6}>
      <S.Title>{name}</S.Title>
      {/* {prevValue && (
        <S.Text>
          <S.IconWrapper> {value > prevValue ? <CaretUpOutlined /> : <CaretDownOutlined />}</S.IconWrapper>
          {getDifference(value, prevValue)}
        </S.Text>
      )} */}

      <div
        style={{ color: '#57D682', fontSize: 14, fontWeight: 500, lineHeight: 1.5 }}
        dangerouslySetInnerHTML={{ __html: health }}
      ></div>
    </BaseSpace>
  );
};
