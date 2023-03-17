import React, { useMemo } from 'react';
// import { dashboardNews } from '@app/constants/dashboardNews';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import * as S from './NewsCard.styles';
import { useTranslation } from 'react-i18next';
import { BaseArticle } from '@app/components/common/BaseArticle/BaseArticle';
import w1Data from 'constants/project.json';
import w2Data from 'constants/projectw2.json';
import w3Data from 'constants/projectw3.json';
import w4Data from 'constants/projectw4.json';
import w1 from 'constants/project_10_03.json';

// type Props = {
//   week: string;
// };

export const NewsCard: React.FC = (props) => {
  const { t } = useTranslation();
  const data = useMemo(() => {
    switch (props.week) {
      case '06/02/2023 - 24/02/2023':
        return w1Data.project_24_02_2023;

      case '13/02/2023 - 17/02/2023':
        return w2Data.project_24_02_2023;

      case '20/02/2023 - 24/02/2023':
        return w1Data.project_24_02_2023;

      case '27/02/2023 - 3/03/2023':
        return w3Data.project_24_02_2023;

      case '27/02/2023 - 28/02/2023':
        return w4Data.project_28_02_2023;

      case '01/03/2023 - 3/03/2023':
        return w3Data.project_24_02_2023;

      case '6/03/2023 - 10/03/2023':
        return w1.project_10_03_2023;

      case '13/03/2023 - 17/03/2023':
        return w1.project_17_03_2023;

      default:
        return w1.project_17_03_2023;
    }
  }, [props.week]);

  return (
    <DashboardCard title={t('rnd-dashboard.project')}>
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
