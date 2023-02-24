import React from 'react';
import { useTranslation } from 'react-i18next';
import { Kanban } from '@app/components/apps/kanban/Kanban/Kanban';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';

const WorkKanbanPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.kanban')}</PageTitle>
      <Kanban />
    </>
  );
};

export default WorkKanbanPage;
