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
          value: 12,
          prevValue: 12,
          unit: 'người',
        },
        {
          id: 2,
          value: 12,
          prevValue: 12,
          unit: 'người',
        },
        {
          id: 3,
          value: 0,
          prevValue: 12,
          unit: 'người',
        },
        {
          id: 4,
          value: 12,
          prevValue: 12,
          unit: 'người',
        },
      ]);
    }, 0);
  });
};
