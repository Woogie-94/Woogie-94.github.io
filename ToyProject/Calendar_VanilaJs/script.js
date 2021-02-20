const calendarCon = document.querySelector(".calendar");
const nextBtn = document.querySelector(".calendar_btn__next");
const prevBtn = document.querySelector(".calendar_btn__prev");

window.onload = () => {
  paintingCalendar();
};

const paintingCalendar = () => {
  const yy = document.querySelector(".calendar_month__yy");
  const mm = document.querySelector(".calendar_month__mm");
  const calendarData = createCalendarData();
  yy.textContent = `${today.format("YYYY")}`;
  mm.textContent = `${today.format("MM")}월`;

  calendarData.map((week, weekIdx) => {
    createWeekComponent();
    week.map((day) => {
      createDayComponent(day, weekIdx);
    });
  });
};

const createWeekComponent = () => {
  const weekElement = document.createElement("div");
  weekElement.classList.add("calendar__week", "week_data_components");

  const blankDayElement = document.createElement("div");
  blankDayElement.classList.add("calendar__day");

  weekElement.append(blankDayElement);
  calendarCon.append(weekElement);
};

const createDayComponent = (day, weekIdx) => {
  const weekContainer = document.querySelectorAll(".week_data_components");
  const dayElement = document.createElement("div");
  dayElement.classList.add("calendar__day", "day_data_components");
  dayElement.textContent = day.format("D");

  const sameMonth = today.format("MM") === day.format("MM");
  if (sameMonth) dayElement.classList.add("day_data_components--on");
  else dayElement.classList.add("day_data_components--off");

  weekContainer[weekIdx].append(dayElement);
};

const removeCalendar = () => {
  const dayElement = document.querySelectorAll(".week_data_components");

  for (let i = 0; i < dayElement.length; i++) {
    calendarCon.removeChild(dayElement[i]);
  }
};

nextBtn.addEventListener("click", () => {
  removeCalendar();
  nextMonth();
  paintingCalendar();
});

prevBtn.addEventListener("click", () => {
  removeCalendar();
  prevMonth();
  paintingCalendar();
});
