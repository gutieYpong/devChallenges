import React from 'react';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mine/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    /**
     * options already restricted by propTypes in `Buttion.jsx`
     */
    // variant: {
    //   options: ['default', 'outline', 'text'],
    //   control: { type: "radio" },
    // }

    /**
     * color & backgroundColor have already defined by regular expression in `preview.js`,
     * so no need to delcare here again.
     */
    // color: { control: 'color' },
    // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
};