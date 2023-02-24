import React from 'react';
import { useTranslation } from 'react-i18next';
//import { Tables } from '@app/components/tables/Tables/Tables';
import { OKRTables } from '@app/components/tables/Tables/OKRTables';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const OKRPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.dataTables')}</PageTitle>
      <OKRTables />
    </>
  );
};

export default OKRPage;
