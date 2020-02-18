import React from 'react';
import Button from './index';
import {action} from '@storybook/addon-actions';

export default {
  component: Button,
  title: 'Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const propsData = {
  ...Button.defaultProps,
};

export const actionsData = {
  onClick: action('onClick'),
};

export const Default = () => {
  return <Button  {...propsData} {...actionsData} >Primary</Button>;
};

export const Secondary = () => {
  return <Button  {...propsData} {...actionsData}
                  type="secondary">Secondary</Button>;
};

export const SmallButton = () => {
  return <Button  {...propsData} {...actionsData} size="small">small</Button>;
};

export const DefaultButton = () => {
  return <Button  {...propsData} {...actionsData}
                  size="default">Default</Button>;
};

export const LargeButton = () => {
  return <Button  {...propsData} {...actionsData} size="large">large</Button>;
};

export const BlockButton = () => {
  return <Button  {...propsData} {...actionsData} block={true}>large</Button>;
};

export const LoadingButton = () => {
  return <Button {...actionsData} {...propsData} loading={true}>large</Button>;
};
