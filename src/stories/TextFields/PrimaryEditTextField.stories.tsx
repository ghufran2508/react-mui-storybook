import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryTextField } from "../../base";
import { RemoveRedEyeOutlined } from "@mui/icons-material";

const meta = {
  title: "Text Fields/PrimaryEditTextField",
  component: PrimaryTextField,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    type: { control: "text" },
    value: { control: "text" },
    containError: { control: "boolean" },
    success: { control: "boolean" },
    register: { control: "object" },
    helperText: { control: "text" },
    required: { control: "boolean" },
    sx: { control: "object" },
    autoComplete: { control: "text" },
    disable: { control: "boolean" },
    multiline: { control: "boolean" },
    rows: { control: "number" },
    onClick: { control: "function" },
    onChange: { control: "function" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    success: undefined,
    type: 'email',
    placeholder: "Enter email address*",
    value: undefined,
    containError: undefined,
    register: undefined,
    startingicon: undefined,
    endingicon: undefined,
    helperText: undefined,
    required: undefined,
    sx: undefined,
    autoComplete: undefined,
    disable: undefined,
    multiline: undefined,
    children: undefined,
    rows: undefined,
    onClick: undefined,
    onChange: undefined,
  },
};

export const Password: Story = {
  args: {
    success: undefined,
    type: 'password',
    placeholder: "Enter password*",
    value: undefined,
    containError: undefined,
    register: undefined,
    startingicon: undefined,
    endingicon: <RemoveRedEyeOutlined sx={{cursor: 'pointer'}}/>,
    helperText: undefined,
    required: undefined,
    sx: undefined,
    autoComplete: undefined,
    disable: undefined,
    multiline: undefined,
    children: undefined,
    rows: undefined,
    onClick: undefined,
    onChange: undefined,
  },
};
