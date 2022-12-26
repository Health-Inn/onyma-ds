import { fireEvent, render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";
import { InputText } from ".";

type SutParams = {
  placeholder?: string;
  name?: string;
};

type SutTypes = {
  onChangeMock: jest.Mock;
  onChangeValueMock: jest.Mock;
};

const makeSut = ({
  placeholder = faker.hacker.phrase(),
  name,
}: SutParams): SutTypes => {
  const onChangeMock = jest.fn();
  const onChangeValueMock = jest.fn();
  render(
    <InputText
      name={name}
      placeholder={placeholder}
      onChange={onChangeMock}
      onChangeValue={onChangeValueMock}
    />
  );
  return {
    onChangeMock,
    onChangeValueMock,
  };
};

describe("<InputText />", () => {
  it("should call onChange correctly", () => {
    const placeholder = faker.hacker.phrase();
    const { onChangeMock } = makeSut({ placeholder });
    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value: "any_value" } });
    expect(onChangeMock).toHaveBeenCalled();
  });

  it("should call onChangeValue correctly", () => {
    const placeholder = faker.hacker.phrase();
    const name = faker.random.word();
    const { onChangeValueMock } = makeSut({ placeholder, name });
    const value = faker.random.words();
    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value } });
    expect(onChangeValueMock).toHaveBeenCalledWith(value, name);
  });

  it("should call onChangeValue without name", () => {
    const placeholder = faker.hacker.phrase();
    const { onChangeValueMock } = makeSut({ placeholder });
    const value = faker.random.words();
    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value } });
    expect(onChangeValueMock).toHaveBeenCalledWith(value, "");
  });
});
