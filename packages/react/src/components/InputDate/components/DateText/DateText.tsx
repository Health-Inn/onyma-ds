import * as SC from "./styles";
import { DateTextProps } from "./types";

export const DateText = ({
  date,
  hasError,
  disabled,
  onClear,
}: DateTextProps) => {
  const format = (dateToFormat: Date) => {
    return dateToFormat.toLocaleString("pt-br", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatDate = date ? format(date) : undefined;

  const renderClearButton = !!date && !!onClear && !disabled;

  return (
    <SC.Container
      error={hasError}
      disabled={disabled}
      withClearButton={renderClearButton}
    >
      <SC.InputDate
        title={formatDate}
        readOnly
        placeholder="dd/mm/aaaa"
        defaultValue={formatDate}
      />
      {renderClearButton && <SC.ClearIcon onClick={onClear} />}
      <SC.CalendarIcon />
    </SC.Container>
  );
};
