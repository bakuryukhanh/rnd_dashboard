import React from 'react';
//import { BasicTable } from '../BasicTable/BasicTable';
//import { TreeTable } from '../TreeTable/TreeTable';
// import { EditableTable } from '../editableTable/EditableTable';
import { useTranslation } from 'react-i18next';
import * as S from './Tables.styles';
import { OKREditableTable } from '../editableTable/OKREditableTable';

export const OKRTables: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.TablesWrapper>
        {/* <S.Card id="basic-table" title={t('tables.basicTable')} padding="1.25rem 1.25rem 0">
          <BasicTable />
        </S.Card> */}
        {/* <S.Card id="tree-table" title={t('tables.treeTable')} padding="1.25rem 1.25rem 0">
          <TreeTable />
        </S.Card> */}
        <S.Card id="editable-table" title={t('tables.okrContent')} padding="1.25rem 1.25rem 0">
          <OKREditableTable />
        </S.Card>
      </S.TablesWrapper>
    </>
  );
};
