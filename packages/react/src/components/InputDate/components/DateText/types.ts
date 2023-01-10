export type DateTextProps = {
  date: Date | undefined;
  hasError?: boolean;
  disabled?: boolean;
  onClear?: () => void;
};
