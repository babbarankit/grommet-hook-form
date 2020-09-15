import React from 'react';
import { useFormContext, FieldError } from 'react-hook-form';
import getIn from 'lodash.get';
import { FormField as GFormField, FormFieldProps as $FormFieldProps } from 'grommet/components/FormField';
import { Box } from 'grommet/components/Box';
import { Text } from 'grommet/components/Text';

export interface FormFieldInputProps<T = any> {
  ['aria-required']?: 'true' | 'false';
  ['aria-invalid']?: 'true' | 'false';
  name?: string;
  required?: boolean;
  htmlFor?: string;
  onBlur?: (event: any) => void;
  onChange?: (value: T) => void;
  style?: any;
  disabled?: boolean;
  control?: any;
  defaultValue?: T;
}

export interface FormFieldProps extends $FormFieldProps {
  name: string;
  children: React.ReactElement<FormFieldInputProps>;
  required?: boolean;
  renderError?: (error: FieldError | null) => React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  children,
  name,
  label,
  required,
  disabled,
  renderError: $renderError,
  ...props
}) => {
  const { errors, formState } = useFormContext();
  const error: FieldError | null = errors && getIn(errors, name, undefined);
  const { touched } = formState;
  let isTouched = getIn(touched, name, false) as boolean | boolean[];
  if (Array.isArray(isTouched)) {
    isTouched = isTouched.reduce((acc, value) => acc || value, false);
  }
  const hasError = error !== undefined && isTouched;
  const renderError = error && ($renderError ? $renderError(error) : error.message);
  return (
    <GFormField
      disabled={disabled}
      error={renderError}
      label={
        required ? (
          <Box direction="row">
            <Text>{label}</Text>
            <Text color="status-critical">*</Text>
          </Box>
        ) : (
          label
        )
      }
      name={name}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {React.cloneElement<FormFieldInputProps>(children, {
        htmlFor: name,
        name,
        disabled,
        'aria-required': required ? 'true' : 'false',
        'aria-invalid': hasError ? 'true' : 'false',
      })}
    </GFormField>
  );
};
