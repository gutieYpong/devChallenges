import React from 'react';
import { Input } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mine/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: 'Some interesting text',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: 'call',
}

export const EndIcon = Template.bind({});
EndIcon.args = {
  endIcon: 'lock',
}

export const Value = Template.bind({});
Value.args = {
  value: 'text',
}

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
}

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
}

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
}

export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
  rows: 4,
}