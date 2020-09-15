import React from 'react';
import { TextArea as GTextArea, TextAreaProps as $TextAreaProps } from 'grommet/components/TextArea';
import { Controller } from 'react-hook-form';
import { FormFieldInputProps } from '../FormField';

export interface TextAreaProps extends Omit<$TextAreaProps, 'name'>, FormFieldInputProps<string> {}

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
