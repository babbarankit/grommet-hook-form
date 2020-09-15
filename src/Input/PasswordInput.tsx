import React, { useState } from 'react';
import { Hide, View } from 'grommet-icons';
import { Button } from 'grommet/components/Button';
import { TextInput, TextInputProps } from './TextInput';

export type PasswordInputProps = TextInputProps;

export const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [reveal, setReveal] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      <TextInput plain type={reveal ? 'text' : 'password'} {...props} style={{ flex: 1 }} />
      <Button icon={reveal ? <View size="medium" /> : <Hide size="medium" />} onClick={() => setReveal(!reveal)} />
    </div>
  );
};
