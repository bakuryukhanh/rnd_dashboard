import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseCard } from '../../common/BaseCard/BaseCard';
import { ActivityChart } from './ActivityChart';
import { ChartData } from 'interfaces/interfaces';
import styled from 'styled-components';
import dataNSNS from '../../../constants/nsns.json';

export const ActivityCard: React.FC = () => {
  const [data] = useState<ChartData>(dataNSNS.nsns_24_02_2023);

  const { t } = useTranslation();

  return (
    <ActivityCardStyled id="activity" title={t('rnd-dashboard.activity.nsns')} padding={0}>
      <ActivityChart data={data} />
    </ActivityCardStyled>
  );
};

const ActivityCardStyled = styled(BaseCard)`
  height: 100%;
`;
