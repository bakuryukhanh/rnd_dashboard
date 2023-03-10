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
        },
        {
          id: 2,
          value: 8,
          prevValue: 9,
          unit: 'người',
          off: 'ThanhNV97 ốm',
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

export const getStatisticsBefore = (): Promise<Statistic[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          value: 9,
          prevValue: 9,
          unit: 'người',
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
