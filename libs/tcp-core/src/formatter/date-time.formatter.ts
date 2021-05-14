import * as moment from 'moment';
import '@tcp/tcp-util';

export interface HourMin {
  intHour: number;
  intMin: number;
}

export const DateTimeConstants = {
  IsoDateFormat: moment.HTML5_FMT.DATE, // YYYY-MM-DD
  IsoTimeFormat: moment.HTML5_FMT.TIME, // HH:mm
  IsoTimestamp: `${moment.HTML5_FMT.DATE} ${moment.HTML5_FMT.TIME_SECONDS}`, // YYYY-MM-DD HH:mm:ss
};

export class DateTimeFormatter {
  static addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  static createAdjustedDate(timeOffset = 0): Date {
    return new Date(+Date.now() + timeOffset);
  }

  static getDateFromTimestamp(date: string) {
    if (!date) {
      return undefined;
    }

    return this.getDate(date, DateTimeConstants.IsoTimestamp);
  }

  static getCurrentTimeOffset(timestamp: string | number) {
    if (!timestamp) {
      return 0;
    }

    const currentDateTime = DateTimeFormatter.getDateFromTimestamp(String(timestamp));
    if (!currentDateTime) {
      return 0;
    }

    const newDate = new Date();
    return DateTimeFormatter.getTimeDiffInMS(newDate, currentDateTime);
  }

  static getDate(date: string, dateFormat: string = DateTimeConstants.IsoDateFormat): Date | undefined {
    if (!date) {
      return undefined;
    }

    const momentDate = moment(date, dateFormat, true);
    const testMomentDate = momentDate.toDate();
    return momentDate.isValid() ? testMomentDate : undefined;
  }

  static getTime(time: string, timeFormat: string = DateTimeConstants.IsoTimeFormat): Date | undefined {
    if (!time) {
      return undefined;
    }

    const dateTime = `2020-01-01 ${time}`;
    const adjustedTimeFormat = `${DateTimeConstants.IsoDateFormat} ${timeFormat}`;
    const momentDate = moment(dateTime, adjustedTimeFormat, true);
    return momentDate.isValid() ? momentDate.toDate() : undefined;
  }

  static getAdjustedDateFormat(dateFormat: string = DateTimeConstants.IsoDateFormat): string {
    return dateFormat.toUpperCase();
  }

  static getAdjustedTimeFormat(timeFormat: string = DateTimeConstants.IsoTimeFormat): string {
    return timeFormat.replace('tt', 'a');
  }

  static getTimeDiffInMS(fromDate: Date, toDate = new Date()) {
    const momentFromDate = moment(fromDate);
    const momentToDate = moment(toDate);
    if (!momentFromDate.isValid() || !momentToDate.isValid()) {
      return 0;
    }
    return momentToDate.diff(momentFromDate, 'milliseconds');
  }

  static getTimeDiffInMinutes(fromDate: Date, toDate = new Date()) {
    const momentFromDate = moment(fromDate);
    const momentToDate = moment(toDate);
    if (!momentFromDate.isValid() || !momentToDate.isValid()) {
      return 0;
    }
    return momentToDate.diff(momentFromDate, 'minutes');
  }

  static is24HourTimeFormat(format: string) {
    return format.includes('H');
  }

  static isValidISODateString(date?: string) {
    if (date === undefined) {
      return true;
    }

    return moment(date, DateTimeConstants.IsoDateFormat).isValid();
  }

  static isValidISOTimeString(time?: string) {
    if (time === undefined) {
      return true;
    }

    const dateTime = `2020-01-01 ${time}`;
    const adjustedTime = `${DateTimeConstants.IsoDateFormat} ${DateTimeConstants.IsoTimeFormat}`;
    return moment(dateTime, adjustedTime, true).isValid();
  }

  static toDateString(
    date?: Date | undefined,
    dateFormat: string = DateTimeConstants.IsoDateFormat,
  ): string | undefined {
    if (!date) {
      return undefined;
    }

    return moment(date).format(DateTimeFormatter.getAdjustedDateFormat(dateFormat));
  }

  static toDateTimeString(date?: Date, dateFormat: string = DateTimeConstants.IsoTimestamp): string | undefined {
    if (!date) {
      return undefined;
    }

    return moment(date).format(DateTimeFormatter.getAdjustedDateFormat(dateFormat));
  }

  static toTimeString(date?: Date | number, timeFormat: string = DateTimeConstants.IsoTimeFormat): string | undefined {
    if (!date) {
      return undefined;
    }

    return moment(date).format(DateTimeFormatter.getAdjustedTimeFormat(timeFormat));
  }

  static toHundredths(time: string | undefined) {
    const _intMaxDisplayLength = 14;
    // eslint-disable-next-line no-restricted-properties
    const _intRoundingFactor = Math.pow(10, _intMaxDisplayLength);
    const objHourMin = DateTimeFormatter.getHourMin(time);
    if (!objHourMin) {
      return '';
    }
    const intDisplayHour = objHourMin.intHour;
    const intDisplayMin = objHourMin.intMin;
    const dblResult = ((intDisplayHour + intDisplayMin / 60) * _intRoundingFactor) / _intRoundingFactor;
    return parseFloat(dblResult.toFixed(4)).toString();
  }

  static toTimeStringFromHundredths(hundredthsValue: string, keepHundredths = false) {
    const dblDisplayValue = parseFloat(hundredthsValue) || 0.0;
    const intHour = Math.floor(dblDisplayValue);
    const intMin = Math.round((dblDisplayValue % 1) * 60);

    return DateTimeFormatter.formatHourMin(intHour, intMin, keepHundredths);
  }

  static getMinutesFromSeconds(seconds?: number) {
    return seconds ? parseInt(String(seconds / 60), 10) : 0;
  }

  static getMinutesFromFormattedDate(formattedDate: string, isDecimal?: boolean) {
    const formattedDateComponents = formattedDate.split(/\.|:/);
    const formattedDateString = isDecimal
      ? DateTimeFormatter.formatHourMin(
          parseInt(formattedDateComponents[0], 10) || 0,
          parseInt(formattedDateComponents[1], 10) || 0,
        )
      : DateTimeFormatter.toTimeStringFromHundredths(formattedDate, true);
    return DateTimeFormatter.getMinutesFromComponents(formattedDateString.split(/\.|:/));
  }

  static getMinutesFromComponents(dateStringComponents: string[]) {
    return parseInt(dateStringComponents[0] || '0', 10) * 60 + parseInt(dateStringComponents[1] || '0', 10);
  }

  static formattedHourMinIsValid(formattedHourMin: string, maxMinutes?: number) {
    const formattedHourMinComponents = formattedHourMin.split(/\.|:/);

    if (maxMinutes) {
      const totalMinutes = DateTimeFormatter.getMinutesFromComponents(formattedHourMinComponents);
      if (totalMinutes > maxMinutes) {
        return false;
      }
    }

    return true;
  }

  static getFormattedValidHourFromDecimal(decimalHourMinute: string, maxMinutes?: number) {
    const formattedDecimalHourMin = DateTimeFormatter.toTimeStringFromHundredths(decimalHourMinute, false);
    return DateTimeFormatter.formattedHourMinIsValid(formattedDecimalHourMin, maxMinutes)
      ? formattedDecimalHourMin
      : decimalHourMinute;
  }

  static parseSimpleHourMin(hour: string, minute: string, maxMinutes?: number) {
    const simpleHourMin = DateTimeFormatter.formatHourMin(parseInt(hour, 10) || 0, parseInt(minute, 10) || 0);
    return DateTimeFormatter.formattedHourMinIsValid(simpleHourMin, maxMinutes) ? simpleHourMin : '';
  }

  static parseDecimalHourMin(decimalHourMinute: string, maxMinutes?: number) {
    const formattedDecimalHourMin = DateTimeFormatter.toTimeStringFromHundredths(decimalHourMinute, true);
    return DateTimeFormatter.formattedHourMinIsValid(formattedDecimalHourMin, maxMinutes) ? decimalHourMinute : '';
  }

  static parseHourMin(hourMinValue: string, hourIsDecimal?: boolean, maxMinutes?: number) {
    if (!hourMinValue) {
      return hourMinValue;
    }

    const hourMin = hourMinValue.replace(/[^0-9.:]/g, '');
    if (!hourMin) {
      return '';
    }

    const hourMinComponents = hourMin.split(/\.|:/);
    return hourIsDecimal
      ? DateTimeFormatter.parseDecimalHourMin(`${hourMinComponents[0] || 0}.${hourMinComponents[1] || 0}`, maxMinutes)
      : DateTimeFormatter.parseSimpleHourMin(hourMinComponents[0], hourMinComponents[1], maxMinutes);
  }

  static formatDecimalHoursToColonFormat(decimalHours: string | undefined) {
    if (!decimalHours) {
      return '';
    }

    const hourMin = decimalHours.replace(/[^0-9.:]/g, '');
    if (!hourMin) {
      return decimalHours;
    }

    const decimalHoursComponents = hourMin.split(/\.|:/);
    return decimalHours.includes('.')
      ? DateTimeFormatter.getFormattedValidHourFromDecimal(hourMin)
      : DateTimeFormatter.parseSimpleHourMin(decimalHoursComponents[0], decimalHoursComponents[1]);
  }

  static obtainParsedTime(time: string, timeFormat: string, isHundredths?: boolean) {
    if (isHundredths) {
      return DateTimeFormatter.toTimeStringFromHundredths(time);
    }
    const date = DateTimeFormatter.getTime(time, timeFormat);
    return DateTimeFormatter.toTimeString(date);
  }

  static obtainParsedDate(date: string, dateFormat: string) {
    const formattedDate = DateTimeFormatter.getDate(date, dateFormat);
    return DateTimeFormatter.toDateString(formattedDate);
  }

  static msToHourMinute(milliseconds: number) {
    let hours: number;
    let minutes: number;
    const seconds = Math.floor(milliseconds / 1000);
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60);
    minutes %= 60;
    const days = Math.floor(hours / 24);
    hours %= 24;
    hours += days * 24;

    return `${hours}:${minutes}`;
  }

  static msToMinuteSecond(milliseconds: number) {
    let minutes: number;
    let seconds = Math.floor(milliseconds / 1000);
    minutes = Math.floor(seconds / 60);
    minutes %= 60;
    seconds %= 60;

    return `${minutes}:${seconds.pad(2)}`;
  }

  static getCalculatedTimeDifference(dateStart: string, dateEnd: string) {
    dateStart = dateStart.replace(/-/g, '/');
    dateEnd = dateEnd.replace(/-/g, '/');

    const intDateInMilliseconds = new Date(dateStart).getTime();
    const intDateOutMilliseconds = new Date(dateEnd).getTime();

    return intDateOutMilliseconds - intDateInMilliseconds;
  }

  private static formatHourMin(intHour: number, intMin: number, keepHundredths = false) {
    if (intMin >= 60) {
      intHour += Math.floor(intMin / 60);
      intMin %= 60;
    } else if (intMin < 0) {
      intHour += Math.floor(intMin / 60);
      intMin = (intMin % 60) + 60;
    }

    const formatModel = keepHundredths ? '{0}.{1}' : '{0}:{1}';
    return formatModel.format(intHour.pad(2), intMin.pad(2));
  }

  private static getHourMin(strValue: string | undefined) {
    if (!strValue) {
      return undefined;
    }

    let intHour = 0;
    let intMin = 0;
    const arrMatches = strValue.match(/(\d+)(:(\d*))?/);
    if (arrMatches) {
      intHour = parseInt(arrMatches[1], 10) || 0;
      intMin = parseInt(arrMatches[3], 10) || 0;
    }

    if (intMin >= 60) {
      intHour += Math.floor(intMin / 60);
      intMin %= 60;
    }

    return {
      intHour,
      intMin,
    } as HourMin;
  }
}
