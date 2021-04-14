import moment, { Moment } from "moment";

class Calendar {
  public targetDate: Moment;
  private _startWeek: number;
  private _endWeek: number;
  private _blankWeek: number;
  public calendarArr: Moment[][];

  constructor(monthChange: number) {
    this.targetDate = moment();
    this.targetDate.add(monthChange, "month");
    this._startWeek = this.targetDate.clone().startOf("month").week();
    this._endWeek = this.targetDate.clone().endOf("month").week() === 1 ? 53 : this.targetDate.clone().endOf("month").week();
    this._blankWeek = this._endWeek - this._startWeek === 4 ? this._endWeek + 1 : this._endWeek;
    this.calendarArr = [];

    this.calenarLoop();
  }

  calenarLoop() {
    for (let week = this._startWeek; week <= this._blankWeek; week++) {
      this.calendarArr.push(
        Array(7)
          .fill(0)
          .map((n, i) => {
            return this.targetDate
              .clone()
              .week(week)
              .startOf("week")
              .add(n + i, "day");
          })
      );
    }
  }
}

export default Calendar;
