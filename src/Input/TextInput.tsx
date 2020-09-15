import React from 'react';
import { TextInput as $TextInput, TextInputProps as $TextInputProps } from 'grommet/components/TextInput';
import { FormFieldInputProps } from '../FormField';
import { Controller } from 'react-hook-form';

export interface TextInputProps extends Omit<$TextInputProps, 'name'>, FormFieldInputProps<string> {}

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
