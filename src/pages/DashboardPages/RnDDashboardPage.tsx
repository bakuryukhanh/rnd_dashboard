import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { ActivityCard } from '@app/components/rnd-dashboard/activityCard/ActivityCard';
import { StatisticsCards } from '@app/components/rnd-dashboard/statisticsCards/StatisticsCards';
import { NewsCard } from '@app/components/rnd-dashboard/NewsCard/NewsCard';
import { NewsWork } from '@app/components/rnd-dashboard/NewsCard/NewsWork';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './DashboardPage.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { SearchDate } from './SearchDate';

type Test = {
  week: string;
};

const RnDDashboardPage: React.FC<Test> = () => {
  const { isTablet, isDesktop } = useResponsive();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function subtractDays(date: any, days: number) {
    date.setDate(date.getDate() - days);
    return date;
  }
  const date = new Date();
  const friday = date.getDay();
  let numberDay: number;
  if (friday + 1 !== 6) {
    numberDay = 6;
  } else {
    numberDay = 0;
  }
  const curr = subtractDays(date, numberDay);
  const nowYear = curr.getFullYear();
  const firstDay = new Date(curr.setDate(curr.getDate() - curr.getDay()));
  const lastDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
  const firstDayMonth = firstDay.getMonth() + 1;
  const lastDayMonth = lastDay.getMonth() + 1;
  let fistMonth, secondMonth;
  // check first month < 9 or > 9 to add '0'
  if (firstDayMonth <= 9) {
    fistMonth = `0${firstDayMonth}`;
  } else {
    fistMonth = firstDayMonth;
  }
  // check second month < 9 or > 9 to add '0'
  if (lastDayMonth <= 9) {
    secondMonth = `0${lastDayMonth}`;
  } else {
    secondMonth = lastDayMonth;
  }
  // show info this week
  let calender;
  if (fistMonth !== secondMonth) {
    calender = `01/${secondMonth}/${nowYear} - ${lastDay.getDate() - 1}/${secondMonth}/${nowYear}`;
  } else {
    calender = `${firstDay.getDate() + 1}/${fistMonth}/${nowYear} - ${lastDay.getDate() - 1}/${secondMonth}/${nowYear}`;
  }
  calender = '27/03/2023 - 31/03/2023'
  const [week, setWeek] = React.useState(calender);

  const { t } = useTranslation();

  const desktopLayout = (
    <>
      <BaseRow>
        <S.LeftSideCol xl={24}>
          <BaseRow gutter={[30, 30]}>
            <BaseCol id="searchDate" xl={8}>
              <SearchDate value={calender} onChange={(week) => setWeek(week)} />
            </BaseCol>
            <BaseCol span={24}>
              <BaseRow gutter={[30, 30]}>
                <StatisticsCards week={week} />
              </BaseRow>
            </BaseCol>
            <BaseCol id="activity" xl={24}>
              <ActivityCard week={week} />
            </BaseCol>
            <BaseCol id="news" span={24}>
              <NewsCard week={week} />
            </BaseCol>
            <BaseCol id="work" span={24}>
              <NewsWork week={week} />
            </BaseCol>
          </BaseRow>
        </S.LeftSideCol>
      </BaseRow>
    </>
  );

  const mobileAndTabletLayout = (
    <>
      <BaseCol id="searchDate" xs={24} md={12} order={(isTablet && 8) || 0}>
        <SearchDate value={calender} onChange={(week) => setWeek(week)} />
      </BaseCol>
      <BaseRow gutter={[20, 20]}>
        <StatisticsCards week={week} />

        <BaseCol id="activity" xs={24} md={24} order={(isTablet && 8) || 0}>
          <ActivityCard week={week} />
        </BaseCol>

        <BaseCol id="news" xs={24} md={24} order={(isTablet && 10) || 0}>
          <NewsCard week={week} />
        </BaseCol>

        <BaseCol id="work" xs={24} md={24} order={(isTablet && 9) || 0}>
          <NewsWork week={week} />
        </BaseCol>

        {/* <BaseCol id="patient-timeline" xs={24} md={12} order={(isTablet && 11) || 0}>
        <PatientResultsCard />
      </BaseCol> */}

        {/* <BaseCol id="blood-screening" xs={24} md={12} order={(isTablet && 6) || 0}>
        <BloodScreeningCard />
      </BaseCol> */}

        {/* <BaseCol id="favorite-doctors" xs={24} md={24} order={(isTablet && 13) || 0}>
        <FavoritesDoctorsCard />
      </BaseCol> */}

        {/* <BaseCol id="covid" xs={24} md={12} order={(isTablet && 12) || 0}>
        <CovidCard />
      </BaseCol> */}

        {/* <BaseCol id="news" xs={24} md={24} order={(isTablet && 14) || 0}>
        <NewsCard />
      </BaseCol> */}
      </BaseRow>
    </>
  );

  return (
    <>
      <PageTitle>{t('common.medical-dashboard')}</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default RnDDashboardPage;
