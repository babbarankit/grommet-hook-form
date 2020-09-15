import { addDecorator } from '@storybook/react';
import { Grommet } from 'grommet/components/Grommet';
import { grommet } from 'grommet/themes';

addDecorator(storyFn => <Grommet full theme={grommet}>{storyFn()}</Grommet>);