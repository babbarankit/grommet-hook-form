import React from 'react';
import { TextInput, TextArea, PasswordInput } from '../src/Input';
import { FormDebug } from '../src/FormDebug';
import { FormField } from '../src/FormField';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from 'grommet/components/Box';
import { Button } from 'grommet/components/Button';

/**********
 * These stories covers different form widgets
 *
 * Also shown is FormDebug and Default Values in Form
 **********/

interface FormState {
  name?: string;
  password?: string;
  bio?: string;
}

const ExampleForm: React.FC<{ defaultValues?: Partial<FormState>; debug?: boolean }> = ({ defaultValues, debug }) => {
  const methods = useForm({
    mode: 'onBlur',
    defaultValues,
  });
  return (
    <Box width="large" margin="auto">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((values) => console.log(values))}>
          <FormField label="Name" name="name" required>
            <TextInput />
          </FormField>
          <FormField label="Password" name="password" required>
            <PasswordInput />
          </FormField>
          <FormField label="Bio" name="bio">
            <TextArea />
          </FormField>
          <Button type="submit">Submit</Button>
          {debug && <FormDebug />}
        </form>
      </FormProvider>
    </Box>
  );
};

export const formWidgets = () => <ExampleForm />;

export const formWidgetDefaultValues = () => (
  <ExampleForm
    defaultValues={{
      name: 'exa',
      bio: 'I am from KapeOwl\nMy age is 99',
      password: 'unk',
    }}
  />
);

export const formWithDebug = () => <ExampleForm debug />;

export default { title: 'Text Input' };
