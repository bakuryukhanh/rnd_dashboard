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
          off: 'Chính thức: 8, SVCNTS: 1',
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
          off: 'Chính thức: 8, SVCNTS: 1',
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

export const getStatisticsWeek31 = (): Promise<Statistic[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          value: 9,
          prevValue: 9,
          unit: 'người',
          off: 'Chính thức: 8, SVCNTS: 1 \n Khánh off 30.3 đi học \n Đức off 27.3 chở mẹ đi khám bệnh \n Lộc off 27.3 dự đám cưới ở quê',
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

export const getStatistics_07_04_2023 = (): Promise<Statistic[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          value: 9,
          prevValue: 9,
          unit: 'người',
          off: 'Chính thức: 8, SVCNTS: 1 \n Khánh off 06.04 đi học (còn 8 ngày phép) \n Gia Huy off 05.04, 06.04 dọn nhà',
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

export const getStatistics_14_04_2023 = (): Promise<Statistic[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          value: 9,
          prevValue: 9,
          unit: 'người',
          off: 'Chính thức: 8, SVCNTS: 1 \n Khánh off nữa buổi 13.04 đi học (còn 7.5 ngày phép) \n Đức off 14.04 bận việc gia đình (còn 11 ngày phép)',
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

export const getStatistics_21_04_2023 = (): Promise<Statistic[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          value: 9,
          prevValue: 9,
          unit: 'người',
          off: `Chính thức: 6, SVCNTS: 1 \n Khánh off chiều 20.04 đi học  <span style='color: red'>(còn 7 ngày)</span> \n  Sang off nữa ngày 21/4 bận việc <span style='color: red'>(còn 12.5 ngày)</span> \n  HuyHG3 off 21.4 bệnh   `,
        },
        {
          id: 2,
          value: 8,
          prevValue: 9,
          unit: 'người',
          off: 'HuyHG3 off 21.4 bệnh',
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

export const getStatistics_28_04_2023 = (): Promise<Statistic[]> => {
  return new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          value: 6,
          prevValue: 6,
          unit: 'người',
          off: `Chính thức: 6 \n Khánh off chiều 26.04 đi học , chiều 28.04 đi học  <span style='color: red'>(còn 6 ngày)</span> \n TaiVP off 26/4, 27/4 người thân nhằm viện  `,
        },
        {
          id: 2,
          value: 6,
          prevValue: 6,
          unit: 'người',
        },
        {
          id: 3,
          value: 3,
          prevValue: 6,
          unit: 'người',
          off: `Chính thức: 6`,
        },
        {
          id: 4,
          value: 6,
          prevValue: 6,
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
          off: 'Chính thức: 8, SVCNTS: 1     ',
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
