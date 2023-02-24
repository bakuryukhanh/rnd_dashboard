import React from 'react';
// import { dashboardNews } from '@app/constants/dashboardNews';
import { dashboardNewsDiffWork } from '@app/constants/dashboardNewsDiffWork';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import * as S from './NewsCard.styles';
import { useTranslation } from 'react-i18next';
import { BaseArticle } from '@app/components/common/BaseArticle/BaseArticle';

export const NewsWork: React.FC = () => {
  const { t } = useTranslation();

  return (
    <DashboardCard title={t('medical-dashboard.diff-work')}>
      <S.Wrapper>
        {dashboardNewsDiffWork.map((advice, index) => (
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
