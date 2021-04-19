import CoveredEmployeeImpl from './covered-employee.impl';
import BooleanInputImpl from './input/boolean.input.impl';
import IntStringItemImpl from './int-string-item.impl';
import LongStringItemImpl from './long-string-item.impl';
import SegmentCompTimeContextImpl from '../context/segment-comp-time.context.impl';
import {SegmentModel} from '../../declarations/global';
import AbstractImpl from '../abstract.impl';
import DateTimeFormatter from '../../formatter/date-time.formatter';
import TrackedFieldContextImpl from '../context/tracked-field.context.impl';

export default class SegmentImpl extends AbstractImpl implements SegmentModel {
  BlnDisableAutoDeduct?: boolean | undefined = false;

  BlnDisableSegmentMinimum?: boolean | undefined = false;

  BlnEditActualTime?: boolean | undefined = false;

  BlnIsClockedIn?: boolean | undefined = false;

  BlnIsMissedIn?: boolean | undefined = false;

  BlnIsMissedOut?: boolean | undefined = false;

  BlnIsTimesheet?: boolean | undefined = false;

  DatActualDateIn?: string | undefined = '';

  DatActualDateOut?: string | undefined = '';

  DatDateIn?: string | undefined = '';

  DatDateOut?: string | undefined = '';

  HrmTimeSheetMinutes?: string | undefined = '';

  IntBreakType?: number | undefined = 0;

  IntForceOvertime?: number | undefined = 0;

  IntLaborCodeCount?: number | undefined = 0;

  LngJobCodeRecordId?: number | undefined = 0;

  LngRecordId?: number | undefined = 0;

  ObjBooleanInputCountsTowardFMLA?: BooleanInputImpl | undefined;

  ObjBooleanInputDisableMissedBreakProcessing?: BooleanInputImpl | undefined;

  ObjCoveredEmployee?: CoveredEmployeeImpl | undefined;

  ObjIntStringItemBreakType?: IntStringItemImpl | undefined;

  ObjLongStringItemCostCode?: LongStringItemImpl | undefined;

  ObjLongStringItemFMLACase?: LongStringItemImpl | undefined;

  ObjLongStringItemJobCode?: LongStringItemImpl | undefined;

  ObjSegmentCompTimeContext?: SegmentCompTimeContextImpl | undefined;

  ObjTrackedFieldContext?: TrackedFieldContextImpl | undefined;

  StrCostCodeSearchQuery?: string | undefined = '';

  StrCoveredEmployeeNoneItem?: string | undefined = '';

  StrFullCostCode?: string | undefined = '';

  StrNote?: string | undefined = '';

  StrRate?: string | undefined = '';

  TimActualTimeIn?: string | undefined = '';

  TimActualTimeOut?: string | undefined = '';

  TimTimeIn?: string | undefined = '';

  TimTimeOut?: string | undefined = '';

  init(data: SegmentImpl) {
    if (!data) {
      return;
    }

    this.ObjBooleanInputCountsTowardFMLA =
      this.ObjBooleanInputCountsTowardFMLA !== undefined
        ? AbstractImpl.fromJSON(data.ObjBooleanInputCountsTowardFMLA, BooleanInputImpl)
        : undefined;

    this.ObjBooleanInputDisableMissedBreakProcessing =
      this.ObjBooleanInputDisableMissedBreakProcessing !== undefined
        ? AbstractImpl.fromJSON(data.ObjBooleanInputDisableMissedBreakProcessing, BooleanInputImpl)
        : undefined;

    this.ObjCoveredEmployee =
      this.ObjCoveredEmployee !== undefined
        ? AbstractImpl.fromJSON(data.ObjCoveredEmployee, CoveredEmployeeImpl)
        : undefined;

    this.ObjIntStringItemBreakType =
      this.ObjIntStringItemBreakType !== undefined
        ? AbstractImpl.fromJSON(data.ObjIntStringItemBreakType, IntStringItemImpl)
        : undefined;

    this.ObjLongStringItemFMLACase =
      this.ObjLongStringItemFMLACase !== undefined
        ? AbstractImpl.fromJSON(data.ObjLongStringItemFMLACase, LongStringItemImpl)
        : undefined;

    this.ObjLongStringItemCostCode =
      this.ObjLongStringItemCostCode !== undefined
        ? AbstractImpl.fromJSON(data.ObjLongStringItemCostCode, LongStringItemImpl)
        : undefined;

    this.ObjLongStringItemJobCode =
      this.ObjLongStringItemJobCode !== undefined
        ? AbstractImpl.fromJSON(data.ObjLongStringItemJobCode, LongStringItemImpl)
        : undefined;

    this.ObjSegmentCompTimeContext =
      this.ObjSegmentCompTimeContext !== undefined
        ? AbstractImpl.fromJSON(data.ObjSegmentCompTimeContext, SegmentCompTimeContextImpl)
        : undefined;

    this.ObjTrackedFieldContext =
      this.ObjTrackedFieldContext !== undefined
        ? AbstractImpl.fromJSON(data.ObjTrackedFieldContext, TrackedFieldContextImpl)
        : undefined;
  }

  getCalculatedTimeDifference() {
    let dateTimeIn: string;
    let dateTimeOut: string;

    if (this.BlnEditActualTime) {
      dateTimeIn = `${this.DatActualDateIn} ${this.TimActualTimeIn}`;
      dateTimeOut = `${this.DatActualDateOut} ${this.TimActualTimeOut}`;
    } else {
      dateTimeIn = `${this.DatDateIn} ${this.TimTimeIn}`;
      dateTimeOut = `${this.DatDateOut} ${this.TimTimeOut}`;
    }

    return DateTimeFormatter.getCalculatedTimeDifference(dateTimeIn, dateTimeOut);
  }

  shouldShowTrackFields() {
    return this.shouldShowTrackField1() || this.shouldShowTrackField2() || this.shouldShowTrackField3();
  }

  shouldShowTrackField1() {
    if (!this.ObjTrackedFieldContext || !this.ObjTrackedFieldContext.ObjTextInputTrack1) {
      return false;
    }

    return this.ObjTrackedFieldContext.ObjTextInputTrack1.BlnIsVisible;
  }

  shouldShowTrackField2() {
    if (!this.ObjTrackedFieldContext || !this.ObjTrackedFieldContext.ObjTextInputTrack2) {
      return false;
    }

    return this.ObjTrackedFieldContext.ObjTextInputTrack2.BlnIsVisible;
  }

  shouldShowTrackField3() {
    if (!this.ObjTrackedFieldContext || !this.ObjTrackedFieldContext.ObjTextInputTrack3) {
      return false;
    }

    return this.ObjTrackedFieldContext.ObjTextInputTrack3.BlnIsVisible;
  }

  selectCostCode(item: LongStringItemImpl) {
    if (!item) {
      return;
    }

    const objLongStringItemCostCode = new LongStringItemImpl();

    objLongStringItemCostCode.setValue(item.getValue());
    objLongStringItemCostCode.setText(item.getText());

    this.ObjLongStringItemCostCode = objLongStringItemCostCode;
  }

  getDateIn() {
    return this.DatDateIn || undefined;
  }
}
