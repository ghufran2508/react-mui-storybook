import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { AuthButton } from "../../base";
import { Google } from "@mui/icons-material";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Buttons/Auth-Button",
  component: AuthButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    text: { control: "text" },
    onClick: { control: "function" },
  },
} satisfies Meta<typeof AuthButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Active Button",
    onClick: () => console.log("Clicked"),
    authIcon: <Google />
  },
};

export const Secondary: Story = {
  args: {
    text: "Active Button",
    onClick: () => console.log("Clicked"),
  },
};
