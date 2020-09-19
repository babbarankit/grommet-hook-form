import React from 'react';
import { TextArea as GTextArea } from 'grommet/components/TextArea';
import { Controller } from 'react-hook-form';
import { PropsOf } from 'grommet/utils';
import { FormFieldInputProps } from '../FormField';

export interface TextAreaProps
  extends FormFieldInputProps<string>,
    Omit<PropsOf<typeof GTextArea>, 'name' | 'onChange' | 'defaultValue'> {}

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  defaultValue,
  onChange: $onChange,
  onBlur: $onBlur,
  ...props
}) => (
  <Controller
    name={name}
    defaultValue={defaultValue}
    render={({ onChange, onBlur, value }) => (
      <GTextArea
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
    )}
  />
);
