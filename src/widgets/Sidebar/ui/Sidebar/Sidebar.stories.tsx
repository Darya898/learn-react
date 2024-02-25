import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import {Sidebar} from "./Sidebar";
import ThemeDecorator from "../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../../app/providers/ThemeProvider";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "widgets/Sidebar",
    component: Sidebar,
} satisfies Meta<typeof Sidebar>;

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





