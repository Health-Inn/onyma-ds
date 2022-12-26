import type { Meta, StoryObj } from "@storybook/react";
import { InputTextBox, InputTextBoxProps, InputText } from "@onyma-ds/react";

export default {
  title: "InputTextBox",
  component: InputTextBox,
  args: {
    placeholder: "Digite seu texto aqui...",
    label: "Label",
    feedbackText: "",
    disabled: false,
    required: false,
    error: false,
  },
} as Meta<InputTextBoxProps>;

export const Primary: StoryObj = {};
Primary.args = {};

export const Required: StoryObj = {};
Required.args = {
  required: true,
};

export const WithErrorFeedback: StoryObj = {};
WithErrorFeedback.args = {
  error: true,
  feedbackText: "Campo inválido.",
};
