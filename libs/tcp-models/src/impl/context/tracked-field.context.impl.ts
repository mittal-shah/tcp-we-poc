import { TrackedFieldContext } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { BooleanInputImpl, DecimalInputImpl, TextInputImpl } from '../domain/input';

export type TrackInputsContext = {
  track1Input?: DecimalInputImpl;
  track2Input?: DecimalInputImpl;
  track3Input?: DecimalInputImpl;
};

export class TrackedFieldContextImpl extends AbstractImpl implements TrackedFieldContext {
  ObjTextInputTrack1?: TextInputImpl | undefined = undefined;

  ObjTextInputTrack2?: TextInputImpl | undefined = undefined;

  ObjTextInputTrack3?: TextInputImpl | undefined = undefined;

  StrTitle?: string | undefined = '';

  IsClockIn?: boolean | undefined = false; // Offline specific property

  init(data: TrackedFieldContext) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrBooleanInputApprovalLevels', BooleanInputImpl);

    this.ObjTextInputTrack1 =
      this.ObjTextInputTrack1 !== undefined ? AbstractImpl.fromJSON(data.ObjTextInputTrack1, TextInputImpl) : undefined;

    this.ObjTextInputTrack2 =
      this.ObjTextInputTrack2 !== undefined ? AbstractImpl.fromJSON(data.ObjTextInputTrack2, TextInputImpl) : undefined;

    this.ObjTextInputTrack3 =
      this.ObjTextInputTrack3 !== undefined ? AbstractImpl.fromJSON(data.ObjTextInputTrack3, TextInputImpl) : undefined;
  }

  copyDataFromInputs(addEditTimesheetInputs: TrackInputsContext) {
    if (!addEditTimesheetInputs) {
      return;
    }

    if (addEditTimesheetInputs.track1Input && this.ObjTextInputTrack1) {
      this.ObjTextInputTrack1.StrValue = String(addEditTimesheetInputs.track1Input.getValue());
    }

    if (addEditTimesheetInputs.track2Input && this.ObjTextInputTrack2) {
      this.ObjTextInputTrack2.StrValue = String(addEditTimesheetInputs.track2Input.getValue());
    }

    if (addEditTimesheetInputs.track3Input && this.ObjTextInputTrack3) {
      this.ObjTextInputTrack3.StrValue = String(addEditTimesheetInputs.track3Input.getValue());
    }
  }

  copyTextInputToDecimal(textInputTrack: TextInputImpl) {
    const decimalInput = new DecimalInputImpl();

    decimalInput.BlnIsDisabled = textInputTrack.BlnIsDisabled;
    decimalInput.BlnIsEditable = textInputTrack.BlnIsEditable;
    decimalInput.BlnIsRequired = textInputTrack.BlnIsRequired;
    decimalInput.BlnIsVisible = textInputTrack.BlnIsVisible;
    decimalInput.StrText = textInputTrack.StrText;
    decimalInput.StrValue = textInputTrack.StrValue;
    decimalInput.StrMaxValue = textInputTrack.StrMaxDecimalValue;
    decimalInput.StrMinValue = textInputTrack.StrMinDecimalValue;
    decimalInput.StrId = `tracked-input-${textInputTrack.StrText}`;

    return decimalInput;
  }

  createInputControls() {
    const trackedFields: TrackInputsContext = {
      track1Input: undefined,
      track2Input: undefined,
      track3Input: undefined,
    };

    if (this.ObjTextInputTrack1) {
      trackedFields.track1Input = this.copyTextInputToDecimal(this.ObjTextInputTrack1);
    }

    if (this.ObjTextInputTrack2) {
      trackedFields.track2Input = this.copyTextInputToDecimal(this.ObjTextInputTrack2);
    }

    if (this.ObjTextInputTrack3) {
      trackedFields.track3Input = this.copyTextInputToDecimal(this.ObjTextInputTrack3);
    }

    return trackedFields;
  }
}
