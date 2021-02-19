const calendarCon = document.querySelector(".calendar");
const nextBtn = document.querySelector(".next_btn");
const prevBtn = document.querySelector(".prev_btn");

window.onload = () => {
  paintingCalendar();
};

const paintingCalendar = () => {
  const calendarData = createCalendarData();
  calendarCon.textContent = today.format("YYYY-MM");

  calendarData.map((week, weekIdx) => {
    createWeekComponent();
    week.map((day) => {
      createDayComponent(day, weekIdx);
    });
  });
};

const createWeekComponent = () => {
  const weekElement = document.createElement("div");
  weekElement.classList.add("week_component");

  calendarCon.append(weekElement);
};

const createDayComponent = (day, weekIdx) => {
  const weekContainer = document.querySelectorAll(".week_component");
  const dayElement = document.createElement("span");
  dayElement.classList.add("day_component");
  dayElement.textContent = day.format("DD") + " / ";

  weekContainer[weekIdx].append(dayElement);
};

nextBtn.addEventListener("click", () => {
  const dayElement = document.querySelectorAll(".week_component");

  for (let i = 0; i < dayElement.length; i++) {
    calendarCon.removeChild(dayElement[i]);
  }

  nextMonth();
  paintingCalendar();
});

prevBtn.addEventListener("click", () => {
  const dayElement = document.querySelectorAll(".week_component");

  for (let i = 0; i < dayElement.length; i++) {
    calendarCon.removeChild(dayElement[i]);
  }

  prevMonth();
  paintingCalendar();
});
