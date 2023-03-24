import React, { useEffect, useMemo, useState } from 'react';
import { useResponsive } from 'hooks/useResponsive';
import { StatisticsCard } from './statisticsCard/StatisticsCard/StatisticsCard';
import { getStatistics, Statistic, getStatisticsBefore, getStatisticsWeek24 } from 'api/statistics.api';
import { statistics as configStatistics } from 'constants/config/statistics';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const StatisticsCards: React.FC = (props) => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);
  const { isTablet } = useResponsive();

  // useEffect(() => {
  //   getStatisticsBefore().then((res) => setStatistics(res));
  // }, []);
  const date = props.week;
  useEffect(() => {
    if (date === '6/03/2023 - 10/03/2023') {
      getStatistics().then((res) => setStatistics(res));
    } else if (date === '20/03/2023 - 24/03/2023') {
      getStatisticsWeek24().then((res) => setStatistics(res));
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
              // Icon={currentStatistic.Icon}
            />
          </BaseCol>
        ) : null;
      }),
    [statistics, isTablet],
  );

  return <>{statisticsCards}</>;
};
