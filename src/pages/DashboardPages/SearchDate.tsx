import React from 'react';
import { useTranslation } from 'react-i18next';
import { ManOutlined, WomanOutlined, CalendarOutlined } from '@ant-design/icons';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseSelect, Option } from '@app/components/common/selects/BaseSelect/BaseSelect';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

type Props = {
  value: string;
  onChange: (value: string) => void;
};
export const SearchDate: React.FC<Props> = (props) => {
  return (
    <BaseButtonsForm.Item name="search">
      <BaseSelect value={props.value} onChange={props.onChange}>
        <Option value="w1">
          <BaseSpace align="center">
            <CalendarOutlined />
            13/02/2023 - 17/02/2023
          </BaseSpace>
        </Option>
        <Option value="w2">
          <BaseSpace align="center">
            <CalendarOutlined />
            20/02/2023 - 24/02/2023
          </BaseSpace>
        </Option>
        <Option value="w3">
          <BaseSpace align="center">
            <CalendarOutlined />
            27/02/2023 - 03/02/2023
          </BaseSpace>
        </Option>
      </BaseSelect>
    </BaseButtonsForm.Item>
  );
};
