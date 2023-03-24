export interface Statistic {
  id: number;
  value: number;
  prevValue: number;
  unit: 'người';
  off?: string;
}

export const getStatistics = (): Promise<Statistic[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          value: 9,
          prevValue: 9,
          unit: 'người',
          off: 'Chính thức: 8, SVCNTS: 1'
        },
        {
          id: 2,
          value: 7,
          prevValue: 9,
          unit: 'người',
          off: 'ThanhNV97(8/3), PhilK(6/3)',
        },
        {
          id: 3,
          value: 3,
          prevValue: 9,
          unit: 'người',
        },
        {
          id: 4,
          value: 9,
          prevValue: 9,
          unit: 'người',
        },
      ]);
    }, 0);
  });
};

export const getStatisticsWeek24 = (): Promise<Statistic[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          value: 9,
          prevValue: 9,
          unit: 'người',
          off: 'Chính thức: 8, SVCNTS: 1'
        },
        {
          id: 2,
          value: 8,
          prevValue: 9,
          unit: 'người',
          off: 'HuyHG3(sốt-24/3)',
        },
        {
          id: 3,
          value: 0,
          prevValue: 9,
          unit: 'người',
        },
        {
          id: 4,
          value: 9,
          prevValue: 9,
          unit: 'người',
        },
      ]);
    }, 0);
  });
};

export const getStatisticsBefore = (): Promise<Statistic[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          value: 9,
          prevValue: 9,
          unit: 'người',
          off: 'Chính thức: 8, SVCNTS: 1'
        },
        {
          id: 2,
          value: 9,
          prevValue: 9,
          unit: 'người',
        },
        {
          id: 3,
          value: 0,
          prevValue: 9,
          unit: 'người',
        },
        {
          id: 4,
          value: 9,
          prevValue: 9,
          unit: 'người',
        },
      ]);
    }, 0);
  });
};
