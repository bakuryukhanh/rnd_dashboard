import React from 'react';
import { useTranslation } from 'react-i18next';
//import { GradientStackedAreaChart } from '@app/components/charts/GradientStackedAreaChart/GradientStackedAreaChart';
//import { VisitorsPieChart } from '@app/components/charts/VisitorsPieChart';
import { ListEmployeesChart } from '@app/components/charts/ListEmployeesChart';
import { ListEmployeesStatusChart } from '@app/components/charts/ListEmployeesStatusChart';
//import { BarAnimationDelayChart } from '@app/components/charts/BarAnimationDelayChart/BarAnimationDelayChart';
//import { ScatterChart } from '@app/components/charts/ScatterChart/ScatterChart';
//import { LineRaceChart } from '@app/components/charts/LineRaceChart/LineRaceChart';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import * as S from '../components/tables/Tables/Tables.styles';
import { EditableTable } from '../components/tables/editableTable/EditableTable';

const ListEmpoyeesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.charts')}</PageTitle>
      <BaseRow gutter={[30, 30]}>
        {/* <BaseCol id="line-race" xs={24}>
          <LineRaceChart />
        </BaseCol> */}
        {/* <BaseCol id="gradient-stacked-area" xs={24}>
          <GradientStackedAreaChart />
        </BaseCol> */}
        {/* <BaseCol id="bar-animation-delay" xs={24}>
          <BarAnimationDelayChart />
        </BaseCol> */}
        <BaseCol id="pie" xs={24} lg={12}>
          <ListEmployeesChart />
        </BaseCol>
        <BaseCol id="pie" xs={24} lg={12}>
          <ListEmployeesStatusChart />
        </BaseCol>
        {/* <BaseCol id="scatter" xs={24} lg={12}>
          <ScatterChart />
        </BaseCol> */}
      </BaseRow>
      <S.TablesWrapper>
        <S.Card id="editable-table" title={t('tables.listEmployeeTable')} padding="0 0 1.875rem">
          <EditableTable />
        </S.Card>
      </S.TablesWrapper>
    </>
  );
};

export default ListEmpoyeesPage;
