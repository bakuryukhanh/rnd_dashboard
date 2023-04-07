import React, { useMemo } from 'react';
// import { dashboardNews } from '@app/constants/dashboardNews';
// import { dashboardNewsDiffWork } from '@app/constants/dashboardNewsDiffWork';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import * as S from './NewsCard.styles';
import { useTranslation } from 'react-i18next';
import { BaseArticle } from '@app/components/common/BaseArticle/BaseArticle';
import work from '../../../api/data/diff-work.json';

type Props = {
  week: string;
};

export const NewsWork: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  const data = useMemo(() => {
    switch (props.week) {
      case '20/02/2023 - 24/02/2023':
        return work.diff_work_24_02_2023;

      case '13/02/2023 - 17/02/2023':
        return work.diff_work_24_02_2023;

      case '27/02/2023 - 3/03/2023':
        return work.diff_work_24_02_2023;

      case '27/02/2023 - 28/02/2023':
        return work.diff_work_28_02_2023;

      case '01/03/2023 - 3/03/2023':
        return work.diff_work_3_03_2023;

      case '6/03/2023 - 10/03/2023':
        return work.diff_work_10_03_2023;

      case '13/03/2023 - 17/03/2023':
        return work.diff_work_17_03_2023;

      case '20/03/2023 - 24/03/2023':
        return work.diff_work_24_03_2023;

      case '27/03/2023 - 31/03/2023':
        return work.diff_work_31_03_2023;

      case '03/04/2023 - 07/04/2023':
        return work.diff_work_07_04_2023;

      default:
        return work.diff_work_default;
    }
  }, [props.week]);

  return (
    <DashboardCard title={t('rnd-dashboard.diff-work')}>
      <S.Wrapper>
        {data.map((advice, index) => (
          <BaseArticle
            key={index}
            // imgUrl={advice.img}
            title={advice.title}
            date={advice.date}
            description={advice.text}
          />
        ))}
      </S.Wrapper>
    </DashboardCard>
  );
};
