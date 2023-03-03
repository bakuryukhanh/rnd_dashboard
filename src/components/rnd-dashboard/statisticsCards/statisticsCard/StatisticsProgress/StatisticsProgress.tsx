import { BaseProgress } from '@app/components/common/BaseProgress/BaseProgress';
import React from 'react';
import * as S from './StatisticsProgress.styles';

interface StatisticsProgressProps {
  color: string;
  unit: 'người';
  value: number;
  total: number;
}
// color, value, unit
export const StatisticsProgress: React.FC<StatisticsProgressProps> = ({ color, value, total }) => {
  return (
    <BaseProgress
      type="circle"
      width={50}
      strokeColor={color}
      trailColor="transparent"
      percent={value/total*100}
      format={() => (
        <>
          <S.ValueText>{value}</S.ValueText>
          <br />
        </>
      )}
    />
  );
};
