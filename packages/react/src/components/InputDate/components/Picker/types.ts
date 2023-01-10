export type Day = {
  date: Date;
  dateFormatted: string;
  isSameMonth: boolean;
  disabled: boolean;
  available: boolean;
};

export type PickerProps = {
  id?: string;
  selectedDate?: Date;
  availableDates?: Date[];
  unavailableDates?: Date[];
  minDateAvailable?: Date;
  maxDateAvailable?: Date;
  onSelectDate?: (date: Date | undefined) => void;
};
