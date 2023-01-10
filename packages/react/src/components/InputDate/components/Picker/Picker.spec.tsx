import { fireEvent, render, screen } from "@testing-library/react";
import { Picker } from "./Picker";
import { localesConfig } from "./localesConfig";
import { theme } from "@onyma-ds/tokens";

type SutParams = {
  selectedDate?: Date;
  availableDates?: Date[];
  unavailableDates?: Date[];
  minDateAvailable?: Date;
  maxDateAvailable?: Date;
};

type SutTypes = {
  onSelectDateMock: jest.Mock;
};

const makeSut = ({
  selectedDate,
  availableDates,
  unavailableDates,
  minDateAvailable,
  maxDateAvailable,
}: SutParams = {}): SutTypes => {
  const onSelectDateMock = jest.fn();
  render(
    <Picker
      selectedDate={selectedDate}
      availableDates={availableDates}
      unavailableDates={unavailableDates}
      minDateAvailable={minDateAvailable}
      maxDateAvailable={maxDateAvailable}
      onSelectDate={onSelectDateMock}
    />
  );
  return {
    onSelectDateMock,
  };
};

describe("<Picker />", () => {
  it("should render month date description correctly", () => {
    const today = new Date("2022-08-15");
    makeSut({ selectedDate: today });
    const monthIndex = today.getMonth();
    const monthName = localesConfig.monthNames[monthIndex];
    const year = today.getFullYear();
    expect(screen.queryByText(`${monthName} de ${year}`)).toBeTruthy();
  });

  it("should render month date description correctly on month change to previous", () => {
    const today = new Date("2022-08-15");
    makeSut({ selectedDate: today });
    fireEvent.click(screen.getByTestId("picker-previous-month"));
    const previousMonth = new Date("2022-07-15");
    const monthIndex = previousMonth.getMonth();
    const monthName = localesConfig.monthNames[monthIndex];
    const year = previousMonth.getFullYear();
    expect(screen.queryByText(`${monthName} de ${year}`)).toBeTruthy();
  });

  it("should render month date description correctly on month change to next", () => {
    const today = new Date("2022-08-15");
    makeSut({ selectedDate: today });
    fireEvent.click(screen.getByTestId("picker-next-month"));
    const nextMonth = new Date("2022-09-15");
    const monthIndex = nextMonth.getMonth();
    const monthName = localesConfig.monthNames[monthIndex];
    const year = nextMonth.getFullYear();
    expect(screen.queryByText(`${monthName} de ${year}`)).toBeTruthy();
  });

  it("should render day names correctly", () => {
    makeSut();
    expect(screen.getByTestId("picker-day-names").children).toHaveLength(7);
  });

  it("should render days correctly", () => {
    makeSut();
    expect(screen.getAllByTestId("picker-day-cell")).toHaveLength(42);
  });

  it("should call onSelectDate correctly", async () => {
    const { onSelectDateMock } = makeSut({
      selectedDate: new Date(2022, 8, 1),
    });
    fireEvent.click(screen.getByTitle("21/09/2022"));
    expect(onSelectDateMock).toHaveBeenCalled();
  });

  it("should render available dates correctly", async () => {
    const availableDates = [
      new Date(2022, 8, 1),
      new Date(2022, 8, 2),
      new Date(2022, 8, 3),
    ];
    makeSut({
      selectedDate: new Date(2022, 8, 2),
      availableDates: availableDates,
    });
    expect(screen.getByTitle("01/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.success
    );
    expect(screen.getByTitle("02/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.primary
    );
    expect(screen.getByTitle("03/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.success
    );
    expect(screen.getByTitle("04/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.gray_90
    );
  });

  it("should render unavailable dates correctly", async () => {
    const unavailableDates = [
      new Date(2022, 8, 1),
      new Date(2022, 8, 2),
      new Date(2022, 8, 3),
    ];
    makeSut({
      selectedDate: new Date(2022, 8, 5),
      unavailableDates: unavailableDates,
    });
    expect(screen.getByTitle("01/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.gray_90
    );
    expect(screen.getByTitle("02/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.gray_90
    );
    expect(screen.getByTitle("03/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.gray_90
    );
    expect(screen.getByTitle("04/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.success
    );
    expect(screen.getByTitle("05/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.primary
    );
    expect(screen.getByTitle("06/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.success
    );
  });

  it("should render min dates correctly", async () => {
    const minDate = new Date(2022, 8, 10);
    makeSut({
      selectedDate: new Date(2022, 8, 12),
      minDateAvailable: minDate,
    });
    expect(screen.getByTitle("08/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.gray_90
    );
    expect(screen.getByTitle("09/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.gray_90
    );
    expect(screen.getByTitle("10/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.success
    );
    expect(screen.getByTitle("11/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.success
    );
    expect(screen.getByTitle("12/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.primary
    );
  });

  it("should render max dates correctly", async () => {
    const maxDate = new Date(2022, 8, 10);
    makeSut({
      selectedDate: new Date(2022, 8, 9),
      maxDateAvailable: maxDate,
    });
    expect(screen.getByTitle("08/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.success
    );
    expect(screen.getByTitle("09/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.primary
    );
    expect(screen.getByTitle("10/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.success
    );
    expect(screen.getByTitle("11/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.gray_90
    );
    expect(screen.getByTitle("12/09/2022")).toHaveStyleRule(
      "background-color",
      theme.colors.gray_90
    );
  });

  it("should render dates of another month disabled", async () => {
    makeSut({
      selectedDate: new Date(2022, 8, 9),
    });
    const day = screen.getByTitle("31/08/2022");
    expect(day).toHaveProperty("disabled", true);
  });

  it("should render weekend dates disabled", async () => {
    makeSut({
      selectedDate: new Date(2022, 8, 9),
    });
    expect(screen.getByTitle("04/09/2022")).toHaveProperty("disabled", true);
    expect(screen.getByTitle("10/09/2022")).toHaveProperty("disabled", true);
    expect(screen.getByTitle("11/09/2022")).toHaveProperty("disabled", true);
    expect(screen.getByTitle("17/09/2022")).toHaveProperty("disabled", true);
    expect(screen.getByTitle("18/09/2022")).toHaveProperty("disabled", true);
    expect(screen.getByTitle("24/09/2022")).toHaveProperty("disabled", true);
    expect(screen.getByTitle("25/09/2022")).toHaveProperty("disabled", true);
  });
});
