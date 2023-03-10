import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MoreOutlined } from '@ant-design/icons';
import { BaseDropdown } from '@app/components/common/BaseDropdown/Dropdown';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { ParticipantsDropdown } from '@app/components/apps/kanban/newCardForm/ParticipantsDropdown/ParticipantsDropdown';
import { TagDropdown } from '@app/components/apps/kanban/newCardForm/TagDropdown/TagDropdown';
import { CardState, Tag as ITag, Participant as IParticipant } from '@app/components/apps/kanban/interfaces';
import * as S from './Card.styles';

interface CardProps {
  style: CSSStyleSheet;
  onClick: () => void;
  onDelete: () => void;
  onChange: (card: CardState) => void;
  className: string;
  id: string | number;
  title: string;
  description: string;
  tags: ITag[];
  participants: IParticipant[];
  cardDraggable: boolean;
  editable: boolean;
}

export const Card: React.FC<CardProps> = ({
  style,
  onClick,
  onDelete,
  onChange,
  className,
  id,
  title,
  description,
  tags = [],
  participants = [],
  cardDraggable,
  editable,
}) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(true);

  const onArrowPress = () => {
    setIsExpanded(!isExpanded);
  };

  const updateCard = (card: CardState) => {
    onChange({ ...card, id });
  };

  const onDeleteCard = () => {
    onDelete();
  };

  const updateTags = (tags: ITag[]) => {
    updateCard({ tags });
  };

  const updateParticipants = (participants: IParticipant[]) => {
    updateCard({ participants });
  };

  const editPopoverItems = [
    {
      key: '1',
      label: t('common.delete'),
      onClick: onDeleteCard,
    },
    {
      key: '2',
      label: t('kanban.archive'),
      onClick: onDeleteCard,
    },
  ];

  return (
    <S.CardWrapper data-id={id} onClick={onClick} style={style} className={className}>
      <S.CollapseCard onChange={onArrowPress} bordered={false} defaultActiveKey={['1']}>
        <S.CardContent
          showArrow={false}
          key="1"
          header={
            <S.CardHeader>
              <S.CardTitle
                draggable={cardDraggable}
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                }}
              >
                {editable ? (
                  <S.Input
                    name="title"
                    value={title}
                    border
                    placeholder={t('kanban.title')}
                    resize="vertical"
                    onSave={(value: string) => updateCard({ title: value })}
                  />
                ) : (
                  title
                )}
              </S.CardTitle>
              <S.CardRightContent>
                <BaseButton noStyle type="text" icon={<S.ArrowDownIcon $expanded={isExpanded} />} />
                <BaseDropdown menu={{ items: editPopoverItems }} placement="bottomRight" trigger={['click']}>
                  <BaseButton
                    noStyle
                    type="text"
                    icon={<MoreOutlined />}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                </BaseDropdown>
              </S.CardRightContent>
            </S.CardHeader>
          }
        >
          <S.CardDetails>
            {editable ? (
              <S.Input
                value={description}
                border
                placeholder={t('kanban.description')}
                resize="vertical"
                onSave={(value: string) => updateCard({ description: value })}
              />
            ) : (
              description
            )}
          </S.CardDetails>
          <S.CardFooter>
            <TagDropdown selectedTags={tags} setSelectedTags={updateTags} />
          </S.CardFooter>

          <S.ParticipantsWrapper>
            <ParticipantsDropdown selectedParticipants={participants} setSelectedParticipants={updateParticipants} />
          </S.ParticipantsWrapper>
        </S.CardContent>
      </S.CollapseCard>
    </S.CardWrapper>
  );
};
