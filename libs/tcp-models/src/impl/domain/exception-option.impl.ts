import { ExceptionOptionModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { BooleanInputImpl, HourMinuteInput } from './input';

export class ExceptionOptionImpl extends AbstractImpl implements ExceptionOptionModel {
  ArrBooleanInputExceptionSettings: BooleanInputImpl[] | undefined = [];

  BlnIsVisible: boolean | undefined = false;

  BlnShouldTrack: boolean | undefined = false;

  LngId: number | undefined = 0;

  ObjHourMinuteInput1: HourMinuteInput | undefined;

  ObjHourMinuteInput2: HourMinuteInput | undefined;

  ObjHourMinuteInput3: HourMinuteInput | undefined;

  ObjHourMinuteInput4: HourMinuteInput | undefined;

  StrText: string | undefined = '';

  init(data: ExceptionOptionModel) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrBooleanInputExceptionSettings', BooleanInputImpl);

    this.ObjHourMinuteInput1 =
      this.ObjHourMinuteInput1 !== undefined
        ? AbstractImpl.fromJSON(data.ObjHourMinuteInput1, HourMinuteInput)
        : undefined;

    this.ObjHourMinuteInput2 =
      this.ObjHourMinuteInput2 !== undefined
        ? AbstractImpl.fromJSON(data.ObjHourMinuteInput2, HourMinuteInput)
        : undefined;

    this.ObjHourMinuteInput3 =
      this.ObjHourMinuteInput3 !== undefined
        ? AbstractImpl.fromJSON(data.ObjHourMinuteInput3, HourMinuteInput)
        : undefined;

    this.ObjHourMinuteInput4 =
      this.ObjHourMinuteInput4 !== undefined
        ? AbstractImpl.fromJSON(data.ObjHourMinuteInput4, HourMinuteInput)
        : undefined;
  }
}
