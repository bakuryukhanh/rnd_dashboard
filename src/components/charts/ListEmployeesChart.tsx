import React from 'react';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { useTranslation } from 'react-i18next';
import { PieChart } from '../common/charts/PieChart';
// import { EmployeePieChart } from '../common/charts/EmployeePieChart';
// import * as S from '../tables/Tables/Tables.styles';
// import { EditableTable } from '../tables/editableTable/EditableTable';

export const ListEmployeesChart: React.FC = () => {
  const { t } = useTranslation();
  const data = [
    { value: 10, name: t('charts.fe') },
    { value: 4, name: t('charts.be-java') },
    { value: 15, name: t('charts.be-python') },
  ];
  const name = t('charts.quality');

  return (
    <>
      <BaseCard padding="0 0 1.875rem" title={t('charts.pie-employee')}>
        <PieChart data={data} name={name} showLegend={true} />
        {/* <EditableTable /> */}
      </BaseCard>
      {/* <S.Card id="editable-table" title={t('tables.editableTable')} padding="0 0 1.875rem">
        <EditableTable />
      </S.Card> */}
    </>
  );
};
