class Clock {
  static MINUTES_IN_HOUR = 60;
  static HOURS_IN_DAY = 24;
  static MINUTES_IN_DAY = 24 * 60;

  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }

  toString() {
    const strHours = String(this.hours).padStart(2, '0');
    const strMinutes = String(this.minutes).padStart(2, '0');

    return `${strHours}:${strMinutes}`;
  }

  add(minutes) {
    const currMinutes = Clock.convertToMinutes(this.hours, this.minutes);
    const totalMins = currMinutes + minutes;

    const [newHours, newMinutes] = Clock.convertToHours(totalMins);
    return Clock.at(newHours, newMinutes);
  }

  subtract(minutes) {
    return this.add(-minutes);
  }

  static convertToMinutes(hours, minutes) {
    return hours * Clock.MINUTES_IN_HOUR + minutes;
  }

  static convertToHours(minutes) {
    while (minutes < 0) {
      minutes += Clock.MINUTES_IN_DAY;
    }

    let hours = Math.floor(minutes / Clock.MINUTES_IN_HOUR) % Clock.HOURS_IN_DAY;
    let adjMinutes = minutes % Clock.MINUTES_IN_HOUR;

    return [hours, adjMinutes];
  }

  isEqual(compareClock) {
    return (
      Clock.convertToMinutes(this.hours, this.minutes) ===
      Clock.convertToMinutes(compareClock.hours, compareClock.minutes)
    );
  }
}

module.exports = Clock;
