const today = moment();

function createCalendarData() {
  let startWeek = today.clone().startOf("month").week();
  let endWeek = today.clone().endOf("month").week() === 1 ? 53 : today.clone().endOf("month").week();
  let blankWeek = endWeek - startWeek === 4 ? endWeek + 1 : endWeek;
  let calendarArr = [];

  for (let week = startWeek; week <= blankWeek; week++) {
    calendarArr.push(
      Array(7)
        .fill(0)
        .map((_, i) => {
          return today.clone().week(week).startOf("week").add(i, "day");
        })
    );
  }

  return calendarArr;
}

function nextMonth() {
  today.add(1, "month");
  createCalendarData();
}

function prevMonth() {
  today.add(-1, "month");
  createCalendarData();
}
