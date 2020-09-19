import React from 'react';
import { TextInput as $TextInput } from 'grommet/components/TextInput';
import { FormFieldInputProps } from '../FormField';
import { Controller } from 'react-hook-form';
import { PropsOf } from 'grommet/utils';

export interface TextInputProps
  extends FormFieldInputProps<string>,
    Omit<PropsOf<typeof $TextInput>, 'name' | 'onChange' | 'defaultValue' | 'ref'> {}

export const TextInput: React.FC<TextInputProps> = ({
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
        <$TextInput
          {...props}
          onChange={(event) => {
            const value = event.target.value;
            $onChange && $onChange(value);
            onChange(value);
          }}
          onBlur={(event) => {
            onBlur();
            $onBlur && $onBlur(event);
          }}
          value={value ? value : ''}
        />
      );
    }}
  />
);
