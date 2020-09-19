import React from 'react';
import { CheckBox as $CheckBox } from 'grommet/components/CheckBox';
import { FormFieldInputProps } from '../FormField';
import { Controller } from 'react-hook-form';
import { PropsOf } from 'grommet/utils';

export interface CheckBoxProps
  extends FormFieldInputProps<boolean>,
    Omit<PropsOf<typeof $CheckBox>, 'name' | 'onChange' | 'defaultValue'> {}

export const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  defaultValue,
  onChange: $onChange,
  onBlur: $onBlur,
  ...props
}) => (
  <Controller
    name={name}
    defaultValue={defaultValue}
    render={({ onChange, onBlur, value }) => {
      return (
        <$CheckBox
          {...props}
          onChange={(event: any) => {
            const value: boolean = event.target.checked;
            $onChange && $onChange(value);
            onChange(value);
          }}
          onBlur={(event) => {
            onBlur();
            $onBlur && $onBlur(event);
          }}
          checked={value}
        />
      );
    }}
  />
);
