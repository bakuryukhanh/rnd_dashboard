/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { ManOutlined, WomanOutlined, CalendarOutlined } from '@ant-design/icons';
// comment ManOutlined, WomanOutlined
import { CalendarOutlined } from '@ant-design/icons';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseSelect, Option } from '@app/components/common/selects/BaseSelect/BaseSelect';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

export interface Props<ValueType = any> {
  value?: ValueType | null;
  onChange?: (value: ValueType) => void;
}

export const SearchDate: React.FC<Props> = (props) => {
  return (
    <BaseButtonsForm.Item name="search">
      <BaseSelect
        value={props.value}
        onChange={props.onChange}
        placeholder={
          <>
            <CalendarOutlined /> {props.value}
          </>
        }
      >
        <Option value="01/03/2023 - 3/03/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            01/03/2023 - 03/03/2023
          </BaseSpace>
        </Option>
        <Option value="6/03/2023 - 10/03/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            06/03/2023 - 10/03/2023
          </BaseSpace>
        </Option>
        <Option value="13/03/2023 - 17/03/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            13/03/2023 - 17/03/2023
          </BaseSpace>
        </Option>
        <Option value="20/03/2023 - 24/03/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            20/03/2023 - 24/03/2023
          </BaseSpace>
        </Option>
        <Option value="27/03/2023 - 31/03/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            27/03/2023 - 31/03/2023
          </BaseSpace>
        </Option>
        <Option value="03/04/2023 - 07/04/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            03/04/2023 - 07/04/2023
          </BaseSpace>
        </Option>
        <Option value="10/04/2023 - 14/04/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            10/04/2023 - 14/04/2023
          </BaseSpace>
        </Option>
        <Option value="17/04/2023 - 21/04/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            17/04/2023 - 21/04/2023
          </BaseSpace>
        </Option>
        <Option value="24/04/2023 - 28/04/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            24/04/2023 - 28/04/2023
          </BaseSpace>
        </Option>
        <Option value="01/05/2023 - 05/05/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            01/05/2023 - 05/05/2023
          </BaseSpace>
        </Option>
        <Option value="08/05/2023 - 12/05/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            08/05/2023 - 12/05/2023
          </BaseSpace>
        </Option>{' '}
        <Option value="15/05/2023 - 18/05/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            15/05/2023 - 18/05/2023
          </BaseSpace>
        </Option>{' '}
        <Option value="22/05/2023 - 26/05/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            22/05/2023 - 26/05/2023
          </BaseSpace>
        </Option>
        <Option value="01/07/2023 - 07/07/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            01/07/2023 - 07/07/2023
          </BaseSpace>
        </Option>
        <Option value="10/07/2023 - 14/07/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            10/07/2023 - 14/07/2023
          </BaseSpace>
        </Option>
        <Option value="17/07/2023 - 21/07/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            17/07/2023 - 21/07/2023
          </BaseSpace>
        </Option>
      </BaseSelect>
    </BaseButtonsForm.Item>
  );
};
