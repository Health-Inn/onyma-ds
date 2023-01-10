import { render, screen } from '@testing-library/react';
import { DateText } from './DateText';

type SutParams = {
  date?: Date;
};

const makeSut = ({ date }: SutParams = {}): void => {
  render(<DateText date={date} />);
};

describe('<DateText />', () => {
  it('should show placeholder correctly', () => {
    makeSut();
    expect(screen.queryByPlaceholderText('dd/mm/aaaa')).toBeTruthy();
  });

  it('should show date formatted correctly', () => {
    makeSut({ date: new Date(2023, 0, 10) });
    expect(screen.queryByTitle('10/01/2023')).toBeTruthy();
  });
});
