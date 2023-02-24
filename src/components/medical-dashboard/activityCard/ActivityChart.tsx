import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseChart, getDefaultTooltipStyles } from '@app/components/common/charts/BaseChart';
import { dashboardPaddings } from '@app/components/medical-dashboard/DashboardCard/DashboardCard';
import { useResponsive } from '@app/hooks/useResponsive';
// import { Dates } from '@app/constants/Dates';
import { ChartData, ChartSeriesData } from '@app/interfaces/interfaces';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { themeObject } from '@app/styles/themes/themeVariables';
import { graphic } from 'echarts';
import dataNSNS from '../../../constants/nsns.json';

const fakeData = [
  {
    name: 'Tuần 1',
    type: 'bar',
    stack: 'Ad',
    data: [20, 21, 22, 24, 26, 28, 30, 30, 25],
  },
  {
    name: 'Tuần 2',
    type: 'bar',
    stack: 'Ad',
    data: [20, 21, 23, 24, 26, 28, 30, 30, 25],
  },
  {
    name: 'Tuần 3',
    type: 'bar',
    stack: 'Ad',
    data: [20, 21, 25, 24, 26, 28, 30, 30, 25],
  },
];

interface ActivityChartProps {
  data: ChartData;
}

export const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  const theme = useAppSelector((state) => state.theme.theme);


  // const days = Dates.getDays();

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
