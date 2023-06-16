import { WithChildrenProps } from '@app/types/generalTypes';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export const PageTitle: React.FC<WithChildrenProps> = () => {
  return (
    <Helmet>
      <title>RnD Dashboard</title>
    </Helmet>
  );
};
