import React, { useMemo } from 'react';
// import { dashboardNews } from '@app/constants/dashboardNews';
import { DashboardCard } from '../DashboardCard/DashboardCard';
import * as S from './NewsCard.styles';
import { useTranslation } from 'react-i18next';
import { BaseArticle } from '@app/components/common/BaseArticle/BaseArticle';
import project from '../../../api/data/project.json';

type Props = {
  week: string;
};

export const NewsCard: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const data = useMemo(() => {
    switch (props.week) {
      case '06/02/2023 - 24/02/2023':
        return project.project_24_02_2023;

      case '13/02/2023 - 17/02/2023':
        return project.project_24_02_2023;

      case '20/02/2023 - 24/02/2023':
        return project.project_24_02_2023;

      case '27/02/2023 - 3/03/2023':
        return project.project_new;

      case '27/02/2023 - 28/02/2023':
        return project.project_28_02_2023;

      case '01/03/2023 - 3/03/2023':
        return project.project_3_03_2023;

      case '6/03/2023 - 10/03/2023':
        return project.project_10_03_2023;

      case '13/03/2023 - 17/03/2023':
        return project.project_17_03_2023;

      case '20/03/2023 - 24/03/2023':
        return project.project_24_03_2023;
      case '27/03/2023 - 31/03/2023':
        return project.project_31_03_2023;

      default:
        return project.project_new;
    }
  }, [props.week]);

  return (
    <DashboardCard title={t('rnd-dashboard.project')}>
      <S.Wrapper>
        {data.map((advice, index) => (
          <BaseArticle
            key={index}
            title={advice.title}
            date={advice.date}
            description={advice.text}
          />
        ))}
      </S.Wrapper>
    </DashboardCard>
  );
};
