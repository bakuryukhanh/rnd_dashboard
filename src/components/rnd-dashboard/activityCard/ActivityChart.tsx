import React from 'react';
import { BaseChart, getDefaultTooltipStyles } from '@app/components/common/charts/BaseChart';
import { dashboardPaddings } from '@app/components/rnd-dashboard/DashboardCard/DashboardCard';
import { useResponsive } from '@app/hooks/useResponsive';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { themeObject } from '@app/styles/themes/themeVariables';
import dataNSNS from '../../../constants/nsns.json';

// ["Sang", "Thanh", "Phi" , "Khanh", "Tai", "HuyHG", "Loc", "Duc", "HuyHQ"]

type Props = {
  week: string;
};

export const ActivityChart: React.FC<Props> = (props) => {
  const theme = useAppSelector((state) => state.theme.theme);
  let fakeData;
  if (props.week === '01/03/2023 - 3/03/2023') {
    fakeData = [
      {
        name: 'Tuần 1',
        type: 'bar',
        stack: 'Ad',
        data: [10, 10, 7, 15, 10, 10, 12, 15, 12],
      },
      {
        name: 'Tuần 2',
        type: 'bar',
        stack: 'Ad',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: 'Tuần 3',
        type: 'bar',
        stack: 'Ad',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ];
  } else if (props.week === '6/03/2023 - 10/03/2023') {
    fakeData = [
      {
        name: 'Tuần 1',
        type: 'bar',
        stack: 'Ad',
        data: [10, 10, 7, 15, 10, 10, 12, 15, 12],
      },
      {
        name: 'Tuần 2',
        type: 'bar',
        stack: 'Ad',
        data: [25, 22, 15, 26, 22, 22, 33, 26, 26],
      },
      {
        name: 'Tuần 3',
        type: 'bar',
        stack: 'Ad',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ];
  } else if (props.week === '13/03/2023 - 17/03/2023') {
    fakeData = [
      {
        name: 'Tuần 1',
        type: 'bar',
        stack: 'Ad',
        data: [10, 10, 7, 15, 10, 10, 12, 15, 12],
      },
      {
        name: 'Tuần 2',
        type: 'bar',
        stack: 'Ad',
        data: [25, 22, 22, 26, 22, 22, 33, 26, 26],
      },
      {
        name: 'Tuần 3',
        type: 'bar',
        stack: 'Ad',
        data: [20, 20, 23, 13, 24, 21, 12, 18, 16],
      },
      {
        name: 'Tuần 4',
        type: 'bar',
        stack: 'Ad',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ];
    // ["Sang", "Thanh", "Phi" , "Khanh", "Tai", "HuyHG", "Loc", "Duc", "HuyHQ"]
  } else if (props.week === '20/03/2023 - 24/03/2023') {
    fakeData = [
      {
        name: 'Tuần 1',
        type: 'bar',
        stack: 'Ad',
        data: [10, 10, 7, 15, 10, 10, 12, 15, 12],
      },
      {
        name: 'Tuần 2',
        type: 'bar',
        stack: 'Ad',
        data: [25, 22, 22, 26, 22, 22, 33, 26, 26],
      },
      {
        name: 'Tuần 3',
        type: 'bar',
        stack: 'Ad',
        data: [20, 20, 23, 13, 24, 21, 12, 18, 16],
      },
      {
        name: 'Tuần 4',
        type: 'bar',
        stack: 'Ad',
        data: [24, 22, 26, 25, 20, 0, 22, 20, 22],
      },
      {
        name: 'Tuần 5',
        type: 'bar',
        stack: 'Ad',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ];
     // ["Sang", "Thanh", "Phi" , "Khanh", "Tai", "HuyHG", "Loc", "Duc", "HuyHQ"]
  } else if (props.week === '27/03/2023 - 31/03/2023') {
    fakeData = [
      {
        name: 'Tuần 1',
        type: 'bar',
        stack: 'Ad',
        data: [10, 10, 7, 15, 10, 10, 12, 15, 12],
      },
      {
        name: 'Tuần 2',
        type: 'bar',
        stack: 'Ad',
        data: [25, 22, 22, 26, 22, 22, 33, 26, 26],
      },
      {
        name: 'Tuần 3',
        type: 'bar',
        stack: 'Ad',
        data: [20, 20, 23, 13, 24, 21, 12, 18, 16],
      },
      {
        name: 'Tuần 4',
        type: 'bar',
        stack: 'Ad',
        data: [24, 22, 26, 25, 20, 27, 22, 20, 22],
      },
      ,
      {
        name: 'Tuần 5',
        type: 'bar',
        stack: 'Ad',
        data: [23, 21, 26, 22, 25, 10, 23, 22, 24],
      },
    ]; 
  } else {
    fakeData = [
      {
        name: 'Tuần 1',
        type: 'bar',
        stack: 'Ad',
        data: [29, 27, 30, 29, 29, 28, 29, 28, 29],
      },
      {
        name: 'Tuần 2',
        type: 'bar',
        stack: 'Ad',
        data: [29, 28, 30, 29, 30, 29, 30, 30, 31],
      },
      {
        name: 'Tuần 3',
        type: 'bar',
        stack: 'Ad',
        data: [48, 35, 40, 34, 61, 43, 39, 33, 31],
      },
    ];
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
