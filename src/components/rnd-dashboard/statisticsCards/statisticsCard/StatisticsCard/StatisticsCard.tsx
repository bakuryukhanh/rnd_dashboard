import React from 'react';
import { useTranslation } from 'react-i18next';
import { StatisticsInfo } from '../StatisticsInfo/StatisticsInfo';
import { StatisticsProgress } from '../StatisticsProgress/StatisticsProgress';
import { useResponsive } from '@app/hooks/useResponsive';
import { StatisticColor } from '@app/constants/config/statistics';
import * as S from './StatisticsCard.styles';
import { themeObject } from '@app/styles/themes/themeVariables';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

interface StatisticsCardProps {
  name: string;
  value: number;
  prevValue: number;
  color: StatisticColor;
  unit: 'người';
  Icon?: React.FC;
  off?: string;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({ name, value, prevValue, color, unit, Icon, off }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const { isTablet: isTabletOrHigher } = useResponsive();

  const { t } = useTranslation();
  const employees = 9;
  const sumEmployees = 12;
  let rate = employees;
  if (name === 'medical-dashboard.ns-out') {
    rate = sumEmployees;
  }
  return (
    <S.StatisticCard padding="0.5rem" $color={color}>
      <BaseRow wrap={false} gutter={[isTabletOrHigher ? 10 : 5, 0]}>
        <BaseCol>
          <S.IconWrapper>
            <S.Icon component={Icon} />
          </S.IconWrapper>
        </BaseCol>

        <BaseCol flex={1}>
          <BaseRow justify="space-between" align="middle" wrap={false}>
            <BaseCol>
              <StatisticsInfo name={t(name)} value={value} prevValue={prevValue} off={off} />
            </BaseCol>

            <BaseCol>
              <StatisticsProgress color={themeObject[theme][color]} unit={unit} value={value} total={rate} />
            </BaseCol>
          </BaseRow>
        </BaseCol>
      </BaseRow>
    </S.StatisticCard>
  );
};
