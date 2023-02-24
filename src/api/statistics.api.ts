export interface Statistic {
  id: number;
  value: number;
  prevValue: number;
  unit: 'người';
}

export const getStatistics = (): Promise<Statistic[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          value: 13,
          prevValue: 13,
          unit: 'người',
        },
        {
          id: 2,
          value: 13,
          prevValue: 13,
          unit: 'người',
        },
        {
          id: 3,
          value: 1,
          prevValue: 13,
          unit: 'người',
        },
        {
          id: 4,
          value: 78,
          prevValue: 90,
          unit: 'người',
        },
      ]);
    }, 0);
  });
};
