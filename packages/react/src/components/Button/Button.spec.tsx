import { fireEvent, render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import { theme } from "@onyma-ds/tokens";
import { Button } from "./Button";
import { ButtonTypes, VariantTypes } from "./styles";

type SutParams = {
  children?: ReactNode;
  title?: string;
  variant?: VariantTypes;
  buttonType?: ButtonTypes;
  disabled?: boolean;
};

type SutTypes = {
  onClickMock: jest.Mock;
};

const makeSut = ({ ...rest }: SutParams = {}): SutTypes => {
  const onClickMock = jest.fn();
  render(<Button {...rest} onClick={onClickMock} />);
  return {
    onClickMock,
  };
};

describe("<Button />", () => {
  it("should render correctly", () => {
    makeSut({ title: "Button test" });
    expect(screen.queryByTitle("Button test")).toBeTruthy();
  });

  it("should call onClick correctly", () => {
    const { onClickMock } = makeSut({ title: "Button test" });
    const button = screen.getByTitle("Button test");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should render with variant primary by default", () => {
    makeSut({ title: "Button test" });
    const button = screen.getByTitle("Button test");
    expect(button).toHaveStyle(`background-color: ${theme.colors.primary}`);
    expect(button).toHaveStyle(`border-color: ${theme.colors.primary}`);
    expect(button).toHaveStyle(`color: ${theme.colors.white}`);
  });

  it("should render with variant secondary correctly", () => {
    makeSut({ title: "Button test", variant: "secondary" });
    const button = screen.getByTitle("Button test");
    expect(button).toHaveStyle(`background-color: ${theme.colors.secondary}`);
    expect(button).toHaveStyle(`border-color: ${theme.colors.secondary}`);
    expect(button).toHaveStyle(`color: ${theme.colors.black}`);
  });

  it("should render the button with correct color with contrast", () => {
    makeSut({ title: "Button test", variant: "black" });
    const button = screen.getByTitle("Button test");
    expect(button).toHaveStyle(`color: ${theme.colors.white}`);
  });

  it("should render the button colors when buttonType is secondary", () => {
    makeSut({
      title: "Button test",
      variant: "secondary",
      buttonType: "secondary",
    });
    const button = screen.getByTitle("Button test");
    expect(button).toHaveStyle(`color: ${theme.colors.secondary}`);
    expect(button).toHaveStyle("background-color: transparent");
    expect(button).toHaveStyle(`border-color: ${theme.colors.secondary}`);
  });

  it("should render the correct disabled button colors when buttonType is tertiary", () => {
    makeSut({
      title: "Button test",
      buttonType: "tertiary",
      disabled: true,
    });
    const button = screen.getByTitle("Button test");
    expect(button).toHaveStyle(`color: ${theme.colors.gray_80}`);
    expect(button).toHaveStyle("background-color: transparent");
    expect(button).toHaveStyle("border-color: transparent");
  });
});
