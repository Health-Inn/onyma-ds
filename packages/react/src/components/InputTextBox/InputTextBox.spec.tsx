import { faker } from "@faker-js/faker";
import { theme } from "@onyma-ds/tokens";
import { render, screen } from "@testing-library/react";
import { InputTextBox } from ".";

type SutParams = {
  label?: string;
  feedback?: string;
  required?: boolean;
  error?: boolean;
};

const makeSut = ({
  label = faker.random.word(),
  feedback = faker.hacker.phrase(),
  required = false,
  error,
}: SutParams = {}): void => {
  render(
    <InputTextBox
      label={label}
      feedbackText={feedback}
      required={required}
      error={error}
    />
  );
};

describe("<InputTextBox />", () => {
  it("should render the label correctly", () => {
    const label = faker.random.word();
    makeSut({ label });
    expect(screen.queryByText(label)).toBeTruthy();
  });

  it("should render the feedback correctly", () => {
    const feedback = faker.random.word();
    makeSut({ feedback, error: true });
    expect(screen.queryByText(feedback)).toBeTruthy();
    expect(screen.getByText(feedback)).toHaveStyle(
      `color: ${theme.colors.danger}`
    );
  });
});
