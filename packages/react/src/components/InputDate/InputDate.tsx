import React, { useEffect, useRef, useState } from 'react';
import { isSameDay } from 'date-fns';
import { useClickOutside } from '../../hooks/useClickOutside';
import { DateText, Picker } from './components';

import { ContentPosition, InputDateProps } from './types';
import * as SC from './styles';

export const InputDate = ({
  id,
  selectedDate,
  openHorizontalDirection = 'left',
  openVerticalDirection = 'down',
  hasError,
  disabled,
  onSelectDate,
  ...rest
}: InputDateProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownContentRef = useRef<HTMLDivElement>(null);

  const [date, setDate] = useState(selectedDate);
  const [show, setShow] = useState(false);
  const [contentPosition, setContentPosition] = useState<ContentPosition>({
    top: undefined,
    left: undefined,
  });

  useClickOutside(dropdownRef, () => setShow(false));
  const handleShowDropdown = () => setShow(!show);

  const handleSelectDate = (date: Date | undefined) => {
    onSelectDate && onSelectDate(date);
    setDate(date);
    setShow(false);
  };

  useEffect(() => {
    setDate(selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    if (dropdownRef.current && dropdownContentRef.current) {
      const dropdownBoundingClientRect =
        dropdownRef.current.getBoundingClientRect();
      const dropdownContentBoundingClientRect =
        dropdownContentRef.current.getBoundingClientRect();

      const contentPositionTemp: ContentPosition = {
        top: undefined,
        left: undefined,
      };

      if (openHorizontalDirection === 'left') {
        contentPositionTemp.left =
          dropdownBoundingClientRect.x +
          dropdownBoundingClientRect.width -
          dropdownContentBoundingClientRect.width;
      } else {
        contentPositionTemp.left = dropdownBoundingClientRect.x;
      }

      if (openVerticalDirection === 'up') {
        contentPositionTemp.top =
          dropdownBoundingClientRect.y -
          dropdownContentBoundingClientRect.height;
      } else {
        contentPositionTemp.top =
          dropdownBoundingClientRect.y + dropdownBoundingClientRect.height;
      }

      setContentPosition(contentPositionTemp);
    }
  }, [show, dropdownRef, dropdownContentRef]);

  return (
    <SC.Container
      ref={dropdownRef}
      id={id}
      data-testid={id}
      disabled={disabled}
    >
      <SC.ChildrenWrapper
        data-testid="date-picker-children"
        onClick={handleShowDropdown}
      >
        <DateText
          date={date}
          hasError={hasError}
          disabled={disabled}
          onClear={handleSelectDate.bind(this, undefined)}
        />
      </SC.ChildrenWrapper>
      {show && (
        <SC.Content
          ref={dropdownContentRef}
          data-testid="date-picker-content"
          top={contentPosition.top}
          left={contentPosition.left}
        >
          <Picker
            {...rest}
            id={id}
            selectedDate={date}
            onSelectDate={handleSelectDate}
          />
        </SC.Content>
      )}
    </SC.Container>
  );
};
