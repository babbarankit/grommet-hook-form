import React from 'react';
import { RadioButton as $RadioButton } from 'grommet/components/RadioButton';
import { FormFieldInputProps } from '../FormField';
import { Controller } from 'react-hook-form';
import { PropsOf } from 'grommet/utils';

export interface RadioButtonProps
  extends FormFieldInputProps<boolean>,
    Omit<PropsOf<typeof $RadioButton>, 'name' | 'onChange' | 'defaultValue' | 'ref'> {}
export const RadioButton: React.FC<RadioButtonProps> = ({
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
        <$RadioButton
          name={name}
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
          checked={!!value}
        />
      );
    }}
  />
);
