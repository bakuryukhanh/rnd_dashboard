import React, { useMemo } from 'react';
// import { dashboardNews } from '@app/constants/dashboardNews';
// import { dashboardNewsDiffWork } from '@app/constants/dashboardNewsDiffWork';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import * as S from './NewsCard.styles';
import { useTranslation } from 'react-i18next';
import { BaseArticle } from '@app/components/common/BaseArticle/BaseArticle';
import w1Data from 'constants/diff-work.json';
import w2Data from 'constants/diff-workw2.json';
import w3Data from 'constants/diff-workw3.json';
import w4Data from 'constants/diff-workw4.json';

// type Props = {
//   week: string;
// };

export const NewsWork: React.FC = (props) => {
  const { t } = useTranslation();

  const data = useMemo(() => {
    switch (props.week) {
      case '20/02/2023 - 24/02/2023':
        return w2Data.diff_work_24_02_2023;

      case '13/02/2023 - 17/02/2023':
        return w1Data.diff_work_24_02_2023;

      case '27/02/2023 - 3/03/2023':
        return w3Data.diff_work_24_02_2023;

      case '27/02/2023 - 28/02/2023':
        return w4Data.diff_work_28_02_2023;

      case '01/03/2023 - 3/03/2023':
        return w3Data.diff_work_24_02_2023;

      case '6/03/2023 - 10/03/2023':
        return w1Data.diff_work_10_03_2023;

      default:
        return w1Data.diff_work_10_03_2023;
    }
  }, [props.week]);

  return (
    <DashboardCard title={t('rnd-dashboard.diff-work')}>
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
