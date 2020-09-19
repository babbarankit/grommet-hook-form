import React from 'react';
import { CheckBoxGroup as $CheckBoxGroup } from 'grommet/components/CheckBoxGroup';
import { FormFieldInputProps } from '../FormField';
import { Controller } from 'react-hook-form';
import { PropsOf } from 'grommet/utils';

export interface CheckBoxGroupProps
  extends FormFieldInputProps<string>,
    Omit<PropsOf<typeof $CheckBoxGroup>, 'name' | 'onChange' | 'defaultValue' | 'ref'> {}

export const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
  name,
  defaultValue,
  onChange: $onChange,
  onBlur: $onBlur,
  ...props
}) => (
  <Controller
    defaultValue={defaultValue}
    name={name}
    render={({ onChange, onBlur, value }) => {
      return (
        <$CheckBoxGroup
          {...props}
          onChange={({ value }: any) => {
            $onChange && $onChange(value);
            onChange(value);
          }}
          onBlur={(event) => {
            onBlur();
            $onBlur && $onBlur(event);
          }}
          value={value}
        />
      );
    }}
  />
);
