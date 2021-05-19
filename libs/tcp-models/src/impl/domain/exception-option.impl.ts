import { ExceptionOptionModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { BooleanInputImpl, HourMinuteInputImpl } from './input';

export class ExceptionOptionImpl extends AbstractImpl implements ExceptionOptionModel {
  ArrBooleanInputExceptionSettings: BooleanInputImpl[] | undefined = [];

  BlnIsVisible: boolean | undefined = false;

  BlnShouldTrack: boolean | undefined = false;

  LngId: number | undefined = 0;

  ObjHourMinuteInput1: HourMinuteInputImpl | undefined;

  ObjHourMinuteInput2: HourMinuteInputImpl | undefined;

  ObjHourMinuteInput3: HourMinuteInputImpl | undefined;

  ObjHourMinuteInput4: HourMinuteInputImpl | undefined;

  StrText: string | undefined = '';

  init(data: ExceptionOptionModel) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrBooleanInputExceptionSettings', BooleanInputImpl);

    this.ObjHourMinuteInput1 =
      this.ObjHourMinuteInput1 !== undefined
        ? AbstractImpl.fromJSON(data.ObjHourMinuteInput1, HourMinuteInputImpl)
        : undefined;

    this.ObjHourMinuteInput2 =
      this.ObjHourMinuteInput2 !== undefined
        ? AbstractImpl.fromJSON(data.ObjHourMinuteInput2, HourMinuteInputImpl)
        : undefined;

    this.ObjHourMinuteInput3 =
      this.ObjHourMinuteInput3 !== undefined
        ? AbstractImpl.fromJSON(data.ObjHourMinuteInput3, HourMinuteInputImpl)
        : undefined;

    this.ObjHourMinuteInput4 =
      this.ObjHourMinuteInput4 !== undefined
        ? AbstractImpl.fromJSON(data.ObjHourMinuteInput4, HourMinuteInputImpl)
        : undefined;
  }
}
