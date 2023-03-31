import React from 'react';
import { BaseChart, getDefaultTooltipStyles } from '@app/components/common/charts/BaseChart';
import { dashboardPaddings } from '@app/components/rnd-dashboard/DashboardCard/DashboardCard';
import { useResponsive } from '@app/hooks/useResponsive';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { themeObject } from '@app/styles/themes/themeVariables';
import dataNSNS from '../../../constants/nsns.json';
import data from '../../../api/data/nsns.json';
// ["Sang", "Thanh", "Phi" , "Khanh", "Tai", "HuyHG", "Loc", "Duc", "HuyHQ"]

type Props = {
  week: string;
};

export const ActivityChart: React.FC<Props> = (props) => {
  const theme = useAppSelector((state) => state.theme.theme);
  let fakeData;

  switch (props.week) {
    case '01/03/2023 - 3/03/2023':
      fakeData = data['week_01.03.2023-3.03.2023']
      break;
    case '6/03/2023 - 10/03/2023':
      fakeData = data['week_6.03.2023-13.03.2023']
      break;
    case '13/03/2023 - 17/03/2023':
      fakeData = data['week_13.03.2023-17.03.2023']
      break;
    case '20/03/2023 - 24/03/2023':
      fakeData = data['week_20.03.2023-24.03.2023']
      break;
    case '27/03/2023 - 31/03/2023':
      fakeData = data['week_27.03.2023-31.03.2023']
      break;
    default:
      fakeData = data.week_default
      break;
  }
  const name = dataNSNS.name_nsns_24_02_2023;

  const { isTablet, isDesktop, isMobile } = useResponsive();

  const size = isDesktop ? 'xl' : isTablet ? 'md' : isMobile ? 'xs' : 'xs';

  const option = {
    grid: {
      top: dashboardPaddings[size][0],
      right: dashboardPaddings[size][1],
      bottom: dashboardPaddings[size][1],
      left: dashboardPaddings[size][0],
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      data: name,
      position: 'top',
      axisLabel: {
        color: themeObject[theme].primary,
        fontWeight: 500,
        fontSize: 14,
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      axisLabel: {
        formatter: '{value} %',
        color: themeObject[theme].textLight,
        fontWeight: 500,
        fontSize: 14,
      },
    },
    series: fakeData,
    tooltip: {
      ...getDefaultTooltipStyles(themeObject[theme]),
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
  };

  return <BaseChart option={option} height="100%" />;
};
