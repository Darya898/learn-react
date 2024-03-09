import {Meta, StoryObj} from '@storybook/react';
import React from "react";
import {Button, ButtonSize, ThemeButton} from './Button';
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

export const OutlineSizeL: Story = {
  args: {
    children:'Text',
    theme:ThemeButton.OUTLINE,
    size:ButtonSize.L,
  },

  decorators: [
    (Story) => (
        <ThemeDecorator theme={Theme.DARK}>
          <Story/>
        </ThemeDecorator>
    ),
  ],
};

export const OutlineSizeXL: Story = {
  args: {
    children:'Text',
    theme:ThemeButton.OUTLINE,
    size:ButtonSize.XL,
  },

  decorators: [
    (Story) => (
        <ThemeDecorator theme={Theme.DARK}>
          <Story/>
        </ThemeDecorator>
    ),
  ],
};

export const BACKGROUND: Story = {
  args: {
    children:'Text',
    theme:ThemeButton.BACKGROUND,
  },

  decorators: [
    (Story) => (
        <ThemeDecorator theme={Theme.DARK}>
          <Story/>
        </ThemeDecorator>
    ),
  ],

};
export const BACKGROUND_INVERTED: Story = {
  args: {
    children:'Text',
    theme:ThemeButton.BACKGROUND_INVERTED,
  },

  decorators: [
    (Story) => (
        <ThemeDecorator theme={Theme.LIGHT}>
          <Story/>
        </ThemeDecorator>
    ),
  ],

};
export const Square: Story = {
  args: {
    children:'>',
    theme:ThemeButton.BACKGROUND_INVERTED,
    square:true,
  },
  decorators: [
    (Story) => (
        <ThemeDecorator theme={Theme.LIGHT}>
          <Story/>
        </ThemeDecorator>
    ),
  ],

};
export const SquareSizeL: Story = {
  args: {
    children:'>',
    theme:ThemeButton.BACKGROUND_INVERTED,
    square:true,
    size:ButtonSize.L
  },
  decorators: [
    (Story) => (
        <ThemeDecorator theme={Theme.LIGHT}>
          <Story/>
        </ThemeDecorator>
    ),
  ],
};

export const SquareSizeM: Story = {
  args: {
    children:'>',
    theme:ThemeButton.BACKGROUND_INVERTED,
    square:true,
    size:ButtonSize.M,
  },
  decorators: [
    (Story) => (
        <ThemeDecorator theme={Theme.LIGHT}>
          <Story/>
        </ThemeDecorator>
    ),
  ],
};

export const SquareSizeXL: Story = {
  args: {
    children:'>',
    theme:ThemeButton.BACKGROUND_INVERTED,
    square:true,
    size:ButtonSize.XL,
  },
  decorators: [
    (Story) => (
        <ThemeDecorator theme={Theme.LIGHT}>
          <Story/>
        </ThemeDecorator>
    ),
  ],
};