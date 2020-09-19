import React from 'react';
import { RadioButtonGroup as $RadioButtonGroup } from 'grommet/components/RadioButtonGroup';
import { FormFieldInputProps } from '../FormField';
import { Controller } from 'react-hook-form';
import { PropsOf } from 'grommet/utils';

export interface RadioButtonGroupProps
  extends FormFieldInputProps<string | number>,
    Omit<PropsOf<typeof $RadioButtonGroup>, 'name' | 'onChange' | 'defaultValue' | 'ref'> {}

export const RadioButtonGroup: React.SFC<RadioButtonGroupProps> = ({
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
        <$RadioButtonGroup
          name={name}
          {...props}
          onChange={(event: any) => {
            const value = event.target.value;
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
