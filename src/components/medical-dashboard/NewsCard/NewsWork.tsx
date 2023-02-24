import React, { useMemo } from 'react';
// import { dashboardNews } from '@app/constants/dashboardNews';
import { dashboardNewsDiffWork } from '@app/constants/dashboardNewsDiffWork';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import * as S from './NewsCard.styles';
import { useTranslation } from 'react-i18next';
import { BaseArticle } from '@app/components/common/BaseArticle/BaseArticle';
import w1Data from 'constants/diff-work.json';
import w2Data from 'constants/diff-workw2.json';
import w3Data from 'constants/diff-workw3.json';

type Props = {
  week: string;
};

export const NewsWork: React.FC = (props) => {
  const { t } = useTranslation();

  const data = useMemo(() => {
    switch (props.week) {
      case 'w1':
        return w2Data.diff_work_24_02_2023;

      case 'w2':
        return w1Data.diff_work_24_02_2023;

      case 'w3':
        return w3Data.diff_work_24_02_2023;
    }
  }, [props.week]);

  return (
    <DashboardCard title={t('medical-dashboard.diff-work')}>
      {/* <S.Wrapper>
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
      </S.Wrapper> */}
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
