import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import ThemeDecorator from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from 'app/providers/ThemeProvider';
import ErrorPage from "./ErrorPage";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "widgets/ErrorPage",
    component: ErrorPage,
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light: Story = {
    args: {
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <Story/>
            </ThemeDecorator>
        ),
    ],
};
export const Dark: Story = {
    args: {
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story/>
            </ThemeDecorator>
        ),
    ],
};