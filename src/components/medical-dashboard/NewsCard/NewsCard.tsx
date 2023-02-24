import React, { useMemo } from 'react';
import { dashboardNews } from '@app/constants/dashboardNews';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import * as S from './NewsCard.styles';
import { useTranslation } from 'react-i18next';
import { BaseArticle } from '@app/components/common/BaseArticle/BaseArticle';
import w1Data from 'constants/project.json';
import w2Data from 'constants/projectw2.json';
import w3Data from 'constants/projectw3.json';

type Props = {
  week: string;
};
export const NewsCard: React.FC = (props) => {
  const { t } = useTranslation();

  const data = useMemo(() => {
    switch (props.week) {
      case 'w1':
        return w1Data.project_24_02_2023;

      case 'w2':
        return w2Data.project_24_02_2023;

      case 'w3':
        return w3Data.project_24_02_2023;
    }
  }, [props.week]);
  console.log(data);
  return (
    <DashboardCard title={t('medical-dashboard.project')}>
      <S.Wrapper>
        {data.map((advice, index) => (
          <BaseArticle
            key={index}
            // imgUrl={advice.img}
            title={advice.title}
            date={advice.date}
            description={advice.text}
            // avatar={advice.avatarUrl}
            // author={advice.author}
            // tags={advice.tags}
          />
        ))}
      </S.Wrapper>
    </DashboardCard>
  );
};
