import React from 'react';
import { addDecorator } from '@storybook/react';
import { Customizer } from '@fluentui/react';
import { myTheme } from '../src/theme/myTheme';

addDecorator((storyFn) => <Customizer settings={{ theme: myTheme }}>{storyFn()}</Customizer>);
