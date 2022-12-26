import type { Meta, StoryObj } from "@storybook/react";
import { InputText, InputTextProps } from "@onyma-ds/react";

export default {
  title: "InputText",
  component: InputText,
  args: {
    placeholder: "Digite seu texto aqui...",
    disabled: false,
  },
} as Meta<InputTextProps>;

export const Primary: StoryObj = {};
