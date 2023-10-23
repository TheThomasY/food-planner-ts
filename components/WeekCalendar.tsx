"use client";

import React, { useState } from "react";
import {
  startOfWeek,
  add,
  eachDayOfInterval,
  format,
  isFirstDayOfMonth,
} from "date-fns";

import Button from "./Button";
import Card from "./Card";

export default function WeekCalendar() {
  const currentDate = new Date();
  const [weekStartDate, setWeekStartDate] = useState(
    startOfWeek(currentDate, { weekStartsOn: 1 })
  );

  const weekInterval = {
    start: weekStartDate,
    end: add(weekStartDate, { days: 6 }),
  };

  const weekDays = eachDayOfInterval(weekInterval);

  function changeWeek(direction: 1 | -1) {
    const newStartDate = new Date(weekStartDate);
    newStartDate.setDate(newStartDate.getDate() + direction * 7);
    setWeekStartDate(newStartDate);
  }

  return (
    <div className="w-full p-24 flex flex-col gap-6">
      <div className="flex flex-row gap-6 justify-center">
        {weekDays.map((day, index) => {
          return (
            <Card
              key={index}
              className="w-96 h-60 flex flex-col items-center relative"
            >
              <div className="border-b-2">{format(day, "EEE do")}</div>
              {(isFirstDayOfMonth(day) || index === 0) && (
                <div className="absolute bottom-0 left-0 py-1 px-2 border-2 rounded-md border-gray-400">
                  {format(day, "MMM")}
                </div>
              )}
              <div className=""></div>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-center gap-12">
        <Button variant="outline" onClick={() => changeWeek(-1)} fullWidth>
          Previous Week
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setWeekStartDate(startOfWeek(currentDate, { weekStartsOn: 1 }))
          }
          fullWidth
        >
          This Week
        </Button>
        <Button variant="outline" onClick={() => changeWeek(1)} fullWidth>
          Next Week
        </Button>
      </div>
    </div>
  );
}
