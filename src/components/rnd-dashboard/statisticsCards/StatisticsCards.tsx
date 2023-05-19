import React, { useEffect, useMemo, useState } from 'react';
import { useResponsive } from 'hooks/useResponsive';
import { StatisticsCard } from './statisticsCard/StatisticsCard/StatisticsCard';
import {
  getStatistics,
  Statistic,
  getStatisticsBefore,
  getStatisticsWeek24,
  getStatisticsWeek31,
  getStatistics_07_04_2023,
  getStatistics_14_04_2023,
  getStatistics_21_04_2023,
  getStatistics_28_04_2023,
  getStatistics_05_05_2023,
  getStatistics_12_05_2023,
} from 'api/statistics.api';
import { statistics as configStatistics } from 'constants/config/statistics';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

type Props = {
  week: string;
};
export const StatisticsCards: React.FC<Props> = (props) => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const { isTablet } = useResponsive();

  const date = props.week;
  useEffect(() => {
    if (date === '6/03/2023 - 10/03/2023') {
      getStatistics().then((res) => setStatistics(res));
    } else if (date === '20/03/2023 - 24/03/2023') {
      getStatisticsWeek24().then((res) => setStatistics(res));
    } else if (date === '27/03/2023 - 31/03/2023') {
      getStatisticsWeek31().then((res) => setStatistics(res));
    } else if (date === '03/04/2023 - 07/04/2023') {
      getStatistics_07_04_2023().then((res) => setStatistics(res));
    } else if (date === '10/04/2023 - 14/04/2023') {
      getStatistics_14_04_2023().then((res) => setStatistics(res));
    } else if (date === '17/04/2023 - 21/04/2023') {
      getStatistics_21_04_2023().then((res) => setStatistics(res));
    } else if (date === '24/04/2023 - 28/04/2023') {
      getStatistics_28_04_2023().then((res) => setStatistics(res));
    } else if (date === '01/05/2023 - 05/05/2023') {
      getStatistics_05_05_2023().then((res) => setStatistics(res));
    } else if (date === '08/05/2023 - 12/05/2023') {
      getStatistics_12_05_2023().then((res) => setStatistics(res));
    } else {
      getStatisticsBefore().then((res) => setStatistics(res));
    }
  }, [date]);

  const statisticsCards = useMemo(
    () =>
      statistics.map((st, index) => {
        const currentStatistic = configStatistics.find((el) => el.id === st.id);

        return currentStatistic ? (
          <BaseCol
            key={st.id}
            id={currentStatistic.name}
            xs={12}
            md={index === statistics.length - 1 ? 0 : 8}
            order={(isTablet && index + 1) || 0}
          >
            <StatisticsCard
              name={currentStatistic.title}
              value={st.value}
              prevValue={st.prevValue}
              color={currentStatistic.color}
              unit={st.unit}
              off={st.off}
            />
          </BaseCol>
        ) : null;
      }),
    [statistics, isTablet],
  );

  return <>{statisticsCards}</>;
};
