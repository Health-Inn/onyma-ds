import type { Meta, StoryObj } from "@storybook/react";
import { Symbol, SymbolProps } from "@onyma-ds/react";

export default {
  title: "Symbol",
  component: Symbol,
  argTypes: {
    type: {
      control: "select",
      defaultValue: "outlined",
      options: ["outlined", "rounded", "sharp"],
    },
    fill: {
      control: "select",
      defaultValue: 0,
      options: [0, 1],
    },
    weight: {
      control: "select",
      defaultValue: 400,
      options: [100, 200, 300, 400, 500, 600, 700],
    },
    size: {
      defaultValue: 24,
      type: {
        name: "number",
      },
    },
  },
} as Meta<SymbolProps>;

export const Home: StoryObj = {};
Home.args = {
  name: "home",
  size: 24,
};

export const Favorite: StoryObj = {};
Favorite.args = {
  name: "favorite",
  size: 24,
};