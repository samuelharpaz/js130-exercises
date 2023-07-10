'use strict';

class Meetup {
  static DAYS_OF_WEEK = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  static NUM_DAYS_IN_WEEK = 7;

  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
  }

  day(weekday, value) {
    const weekdayNum = Meetup.DAYS_OF_WEEK.indexOf(weekday.toLowerCase());

    switch (value.toLowerCase()) {
      case 'first':
        return this._getDateObj(this.getFirst(weekdayNum));
      case 'second':
        return this._getDateObj(this.getSecond(weekdayNum));
      case 'third':
        return this._getDateObj(this.getThird(weekdayNum));
      case 'fourth':
        return this._getDateObj(this.getFourth(weekdayNum));
      case 'fifth':
        return this._getDateObj(this.getFifth(weekdayNum));
      case 'last':
        return this._getDateObj(this.getLast(weekdayNum));
      case 'teenth':
        return this._getDateObj(this.getTeenth(weekdayNum));
    }
  }

  _getFirstDayofMonth() {
    return new Date(this.year, this.month).getDay();
  }

  _getLastOfMonth() {
    const last = new Date(this.year, this.month + 1, 0);
    return {
      date: last.getDate(),
      day: last.getDay()
    };
  }

  getFirst(weekdayNum) {
    let firstDayOfMonth = this._getFirstDayofMonth();

    if (weekdayNum >= firstDayOfMonth) {
      return weekdayNum - firstDayOfMonth + 1;
    } else {
      return Meetup.NUM_DAYS_IN_WEEK - (firstDayOfMonth - weekdayNum) + 1;
    }
  }

  getSecond(weekdayNum) {
    const first = this.getFirst(weekdayNum);
    return first + 7;
  }

  getThird(weekdayNum) {
    return this.getSecond(weekdayNum) + 7;
  }

  getFourth(weekdayNum) {
    return this.getThird(weekdayNum) + 7;
  }

  getFifth(weekdayNum) {
    const date = this.getFourth(weekdayNum) + 7;
    let daysInMonth = this._getLastOfMonth().date;

    return date <= daysInMonth ? date : null;
  }

  getLast(weekdayNum) {
    const lastDate = this._getLastOfMonth().date;
    const lastDay = this._getLastOfMonth().day;

    if (weekdayNum <= lastDay) {
      return lastDate - (lastDay - weekdayNum);
    } else {
      return lastDate - (7 - (weekdayNum - lastDay));
    }
  }

  getTeenth(weekdayNum) {
    const FIRST_TEENTH = 13;

    let date = this.getFirst(weekdayNum);

    while (date < FIRST_TEENTH) {
      date += 7;
    }

    return date;
  }

  _getDateObj(date) {
    if (date === null) return null;

    return new Date(this.year, this.month, date);
  }
}

module.exports = Meetup;
