import { FC } from 'react';
// import { ReactComponent as BonesIcon } from '@app/assets/icons/bones.svg';
// import { ReactComponent as FatIcon } from '@app/assets/icons/fat.svg';
// import { ReactComponent as ProteinIcon } from '@app/assets/icons/protein.svg';
// import { ReactComponent as WaterBalanceIcon } from '@app/assets/icons/water.svg';

export type StatisticColor = 'primary' | 'error' | 'secondary' | 'success';

interface ConfigStatistic {
  id: number;
  name: string;
  title: string;
  color: StatisticColor;
  Icon?: FC;
}

export const statistics: ConfigStatistic[] = [
  {
    id: 1,
    name: 'protein',
    title: 'medical-dashboard.ns',
    color: 'success',
    // Icon: ProteinIcon,
  },
  {
    id: 2,
    name: 'fat',
    title: 'medical-dashboard.ns-health',
    color: 'success',
    // Icon: FatIcon,
  },
  {
    id: 3,
    name: 'bones',
    title: 'medical-dashboard.ns-out',
    color: 'primary',
    // Icon: BonesIcon,
  },
  {
    id: 4,
    name: 'water',
    title: 'medical-dashboard.ns-in',
    color: 'secondary',
    // Icon: WaterBalanceIcon,
  },
];
