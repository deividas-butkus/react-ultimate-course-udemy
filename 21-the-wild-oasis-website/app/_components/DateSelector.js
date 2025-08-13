"use client";

import { useReservation, resetRange } from "@/_context/reservationContext";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import { useMemo } from "react";
import "react-day-picker/dist/style.css";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();

  // Memoize expensive calculations
  const displayRange = useMemo(() => {
    return isAlreadyBooked(range, bookedDates) ? {} : range;
  }, [range, bookedDates]);

  const { regularPrice, discount } = cabin;
  const numNights = displayRange?.from && displayRange?.to 
    ? differenceInDays(displayRange.to, displayRange.from) 
    : 0;
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  // Memoize expensive disabled function
  const disabledDays = useMemo(() => {
    const bookedDatesSet = new Set(bookedDates.map(date => date.getTime()));
    return (curDate) => {
      return isPast(curDate) || bookedDatesSet.has(curDate.getTime());
    };
  }, [bookedDates]);

  // Memoize static dates
  const today = useMemo(() => new Date(), []);
  const endYear = useMemo(() => today.getFullYear() + 5, [today]);

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={today}
        fromDate={today}
        toYear={endYear}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={disabledDays}
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
