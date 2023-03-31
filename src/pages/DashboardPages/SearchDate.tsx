import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { ManOutlined, WomanOutlined, CalendarOutlined } from '@ant-design/icons';
// comment ManOutlined, WomanOutlined
import { CalendarOutlined } from '@ant-design/icons';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { BaseSelect, Option } from '@app/components/common/selects/BaseSelect/BaseSelect';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchDate: React.FC<Props> = (props) => {
  console.log({props})
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
        <Option value="13/02/2023 - 17/02/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            13/02/2023 - 17/02/2023
          </BaseSpace>
        </Option>
        <Option value="20/02/2023 - 24/02/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            20/02/2023 - 24/02/2023
          </BaseSpace>
        </Option>
        <Option value="27/02/2023 - 28/02/2023">
          <BaseSpace align="center">
            <CalendarOutlined />
            27/02/2023 - 28/02/2023
          </BaseSpace>
        </Option>
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
      </BaseSelect>
    </BaseButtonsForm.Item>
  );
};
