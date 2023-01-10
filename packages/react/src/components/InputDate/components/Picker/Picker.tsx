import React, { useMemo, useState } from 'react';
import {
  addDays,
  addMonths,
  differenceInDays,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isBefore,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subWeeks,
} from 'date-fns';
import { Symbol } from '../../../Symbol/Symbol';
import { localesConfig } from './localesConfig';

import * as SC from './styles';
import { Day, PickerProps } from './types';

export const Picker = ({
  id,
  selectedDate,
  availableDates,
  unavailableDates,
  minDateAvailable,
  maxDateAvailable,
  onSelectDate,
}: PickerProps) => {
  const [currentMonthDate, setCurrentMonthDate] = useState(
    selectedDate || new Date(),
  );

  const handleChangeCurrentMonthDate = (variation: number) => {
    setCurrentMonthDate((prevDate) => addMonths(prevDate, variation));
  };

  const handleSelectDate = (date: Date) => {
    onSelectDate && onSelectDate(date);
  };

  const verifyDateAvailability = (dateToVerify: Date) => {
    let isAvailable = true;

    if (
      availableDates &&
      !availableDates.some((dateIterator) =>
        isSameDay(dateIterator, dateToVerify),
      )
    )
      isAvailable = false;
    if (
      unavailableDates &&
      unavailableDates.some((dateIterator) =>
        isSameDay(dateIterator, dateToVerify),
      )
    )
      isAvailable = false;
    if (
      minDateAvailable &&
      !(
        isSameDay(dateToVerify, minDateAvailable) ||
        isAfter(dateToVerify, minDateAvailable)
      )
    ) {
      isAvailable = false;
    }
    if (
      maxDateAvailable &&
      !(
        isSameDay(dateToVerify, maxDateAvailable) ||
        isBefore(dateToVerify, maxDateAvailable)
      )
    ) {
      isAvailable = false;
    }
    return isAvailable;
  };

  const organizeTheDays = (monthToOrganize: Date) => {
    const date = monthToOrganize;
    const firstDateOfTheMonth = startOfMonth(date);
    const firstDateOfTheFirstWeek = startOfWeek(firstDateOfTheMonth);

    const lastDateOfTheMonth = endOfMonth(date);
    const lastDateOfTheLastWeek = endOfWeek(lastDateOfTheMonth);

    const diffBegin = Math.abs(
      differenceInDays(firstDateOfTheFirstWeek, firstDateOfTheMonth),
    );
    const diffEnd = Math.abs(
      differenceInDays(lastDateOfTheLastWeek, lastDateOfTheMonth),
    );

    let startDate =
      diffBegin < diffEnd - 1
        ? startOfWeek(subWeeks(firstDateOfTheMonth, 1))
        : firstDateOfTheFirstWeek;
    let endDate = addDays(startDate, 42);
    let iteratorDate = startDate;

    const allDaysTemp: Day[] = [];

    while (iteratorDate < endDate) {
      allDaysTemp.push({
        date: iteratorDate,
        dateFormatted: format(iteratorDate, 'dd/MM/yyyy'),
        isSameMonth: isSameMonth(iteratorDate, date),
        disabled: [0, 6].includes(iteratorDate.getDay()),
        available: verifyDateAvailability(iteratorDate),
      });

      iteratorDate = addDays(iteratorDate, 1);
    }

    return allDaysTemp;
  };

  const currentMonthDateDescription = useMemo(() => {
    const monthIndex = currentMonthDate.getMonth();
    const monthName = localesConfig.monthNames[monthIndex];
    const year = currentMonthDate.getFullYear();
    return `${monthName} de ${year}`;
  }, [currentMonthDate]);

  const monthToRender = useMemo(() => {
    return organizeTheDays(currentMonthDate);
  }, [currentMonthDate]);

  return (
    <SC.Container id={`${id}-picker`} data-testid={`${id}-picker`}>
      <SC.Header>
        <h4>{currentMonthDateDescription}</h4>
        <SC.ChangeMonthWrapper>
          <SC.ButtonCleaned
            data-testid="picker-previous-month"
            type="button"
            title="Voltar mês"
            onClick={handleChangeCurrentMonthDate.bind(this, -1)}
          >
            <Symbol name="arrow_back_ios" />
          </SC.ButtonCleaned>
          <SC.ButtonCleaned
            data-testid="picker-next-month"
            type="button"
            title="Avançar mês"
            onClick={handleChangeCurrentMonthDate.bind(this, 1)}
          >
            <Symbol name="arrow_forward_ios" />
          </SC.ButtonCleaned>
        </SC.ChangeMonthWrapper>
      </SC.Header>
      <SC.Body>
        <SC.DaysAbbreviationWrapper data-testid="picker-day-names">
          {localesConfig.dayNamesShort.map((day, index) => (
            <SC.Cell
              key={`${day}-${index}`}
              title={localesConfig.dayNames[index]}
            >
              {day}
            </SC.Cell>
          ))}
        </SC.DaysAbbreviationWrapper>
        <SC.DaysNumberWrapper data-testid="picker-days-wrapper">
          {monthToRender.map((day) => (
            <SC.Cell data-testid="picker-day-cell" key={day.date.toISOString()}>
              <SC.DayButton
                type="button"
                title={day.dateFormatted}
                selected={selectedDate && isSameDay(selectedDate, day.date)}
                available={day.available}
                isAnotherMonth={!day.isSameMonth}
                disabled={day.disabled || !day.isSameMonth}
                onClick={handleSelectDate.bind(this, day.date)}
              >
                {day.date.getDate()}
              </SC.DayButton>
            </SC.Cell>
          ))}
        </SC.DaysNumberWrapper>
      </SC.Body>
    </SC.Container>
  );
};
