import { PickerProps } from "./components";

export type InputDateProps = {
  openVerticalDirection?: 'up' | 'down';
  openHorizontalDirection?: 'left' | 'right';
  hasError?: boolean;
  disabled?: boolean;
} & PickerProps;

export type ContentPosition = {
  top: number | undefined;
  left: number | undefined;
}
