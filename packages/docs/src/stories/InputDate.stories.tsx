import type { Meta, StoryObj } from "@storybook/react";
import { InputDate, InputDateProps } from "@onyma-ds/react";
import { addDays } from "date-fns";

export default {
  title: "InputDate",
  component: InputDate,
  argTypes: {
    selectedDate: {
      defaultValue: undefined,
    },
    openHorizontalDirection: {
      control: "select",
      defaultValue: "left",
      options: ["left", "right"],
    },
    openVerticalDirection: {
      control: "select",
      defaultValue: "down",
      options: ["down", "up"],
    },
    hasError: {
      type: "boolean",
      defaultValue: false,
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
    minDateAvailable: {
      control: {
        type: "date",
      },
    },
    maxDateAvailable: {
      control: {
        type: "date",
      },
    },
    onSelectDate: {
      type: "function",
    },
  },
} as Meta<InputDateProps>;

export const Primary: StoryObj = {};
Primary.args = {};

export const WithSpecificDatesAvailable: StoryObj = {};
WithSpecificDatesAvailable.args = {
  unavailableDates: [
    new Date(),
    addDays(new Date(), 1),
    addDays(new Date(), 3),
  ],
};

export const WithSpecificDatesUnavailable: StoryObj = {};
WithSpecificDatesUnavailable.args = {
  unavailableDates: [
    new Date(),
    addDays(new Date(), 1),
    addDays(new Date(), 3),
  ],
};
