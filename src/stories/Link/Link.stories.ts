import type { Meta, StoryObj } from "@storybook/react";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import { MyLink } from "../../base";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Links/Link",
  component: MyLink,
  decorators: [withRouter],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  argTypes: {
    to: {control: 'text'},
    text: {control: 'text'},
    target: {control: 'text'},
    underline: {control: 'boolean'},
    color: {control: 'text'},
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof MyLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    to: "/jobs",
    text: "Jobs"
  },
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: "/jobs",
      },
      routing: {
        path: "/jobs",
      },
    }),
  },
};

export const Secondary: Story = {
  args: {
    to: "/sign-up",
    text: "Sign Up"
  },
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: "/sign-up",
      },
      routing: {
        path: "/sign-up",
      },
    }),
  },
};
