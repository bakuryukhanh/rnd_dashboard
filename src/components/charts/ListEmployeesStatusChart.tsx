import React from 'react';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { useTranslation } from 'react-i18next';
import { PieChart } from '../common/charts/PieChart';
//import { EmployeePieChart } from '../common/charts/EmployeePieChart';
// import * as S from '../tables/Tables/Tables.styles';
//import { EditableTable } from '../tables/editableTable/EditableTable';

export const ListEmployeesStatusChart: React.FC = () => {
  const { t } = useTranslation();
  const data = [
    { value: 2, name: t('charts.remote') },
    { value: 26, name: t('charts.no-remote') },
    { value: 1, name: t('charts.hydrid') },
  ];
  const name = t('charts.quality');

  return (
    <>
      <BaseCard padding="0 0 1.875rem" title={t('charts.pie-employee-status')}>
        <PieChart data={data} name={name} showLegend={true} />
        {/* <EditableTable /> */}
      </BaseCard>
      {/* <S.Card id="editable-table" title={t('tables.editableTable')} padding="0 0 1.875rem">
        <EditableTable />
      </S.Card> */}
    </>
  );
};
