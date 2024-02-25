import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Button, ThemeButton} from './Button';
import {Theme} from "../../../app/providers/ThemeProvider";
import ThemeDecorator from "../../config/storybook/ThemeDecorator/ThemeDecorator";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { children: "Test" },
  argTypes: {
    theme: ThemeButton,
  },

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children:'Text',
  },
};



export const Clear: Story = {
  args: {
      children:'Text',
      theme:ThemeButton.CLEAR,
  },
};
export const Outline: Story = {
  args: {
    children:'Text',
    theme:ThemeButton.OUTLINE,
  },
  decorators: [
    (Story) => (
        <ThemeDecorator theme={Theme.DARK}>
          <Story/>
        </ThemeDecorator>
    ),
  ],

};



