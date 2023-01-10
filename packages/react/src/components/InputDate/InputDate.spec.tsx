import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { InputDate } from "./InputDate";

type SutTypes = {
  selectedDate?: Date;
  openVerticalDirection?: "up" | "down";
  openHorizontalDirection?: "left" | "right";
};

type SutReturn = {
  onSelectDateMock: jest.Mock;
};

const makeSut = ({ selectedDate = new Date() }: SutTypes = {}): SutReturn => {
  const onSelectDateMock = jest.fn();
  render(
    <InputDate
      id="date-picker"
      selectedDate={selectedDate}
      onSelectDate={onSelectDateMock}
    />
  );
  return {
    onSelectDateMock,
  };
};

describe("<InputDate />", () => {
  it("should open Picker correctly", () => {
    makeSut();
    fireEvent.click(screen.getByTestId("date-picker-children"));
    expect(screen.queryByTestId("date-picker-picker")).toBeTruthy();
  });

  it("should close Picker correctly", () => {
    makeSut();
    fireEvent.click(screen.getByTestId("date-picker-children"));
    fireEvent.click(screen.getByTestId("date-picker-children"));
    expect(screen.queryByTestId("date-picker-picker")).toBeFalsy();
  });

  it("should call onSelectDate correctly", () => {
    const { onSelectDateMock } = makeSut({
      selectedDate: new Date("2022-09-22"),
    });
    fireEvent.click(screen.getByTestId("date-picker-children"));
    fireEvent.click(screen.getByTitle("22/09/2022"));
    expect(onSelectDateMock).toHaveBeenCalled();
    expect(screen.queryByTestId("date-picker-picker")).toBeFalsy();
  });

  it("should render selectedDate correctly", () => {
    makeSut({
      selectedDate: new Date(2022, 8, 22),
    });
    fireEvent.click(screen.getByTestId("date-picker-children"));
    const components = screen.getAllByTitle(/22\/09\/2022/);
    expect(components).toHaveLength(2);
  });
});
