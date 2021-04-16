import {DateTimeConstants} from '../formatter/date-time.formatter';

const CommonConstants = {
  applicationId: 130,
  MaxLogsToPersist: 100,
  IsoDateFormat: DateTimeConstants.IsoDateFormat, // YYYY-MM-DD
  IsoTimeFormat: DateTimeConstants.IsoTimeFormat, // HH:mm
  IsoTimestamp: `${DateTimeConstants.IsoDateFormat} ${DateTimeConstants.IsoTimeFormat}`, // YYYY-MM-DD HH:mm:ss
  intNoneItemValue: -999999999,
  intMonthDayOnlyYear: 2000,
  routeSeparator: '/',
};

export default CommonConstants;
