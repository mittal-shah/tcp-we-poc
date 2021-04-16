import {EmployeeMessageModel} from '../../../declarations/global';
import BooleanInputImpl from './input/boolean.input.impl';
import AbstractImpl from '../abstract.impl';

export default class EmployeeMessageImpl extends AbstractImpl implements EmployeeMessageModel {
  BlnCanDeleteMessage?: boolean | undefined = false;

  BlnCanEditMessage?: boolean | undefined = false;

  BlnCanMarkAsRead?: boolean | undefined = false;

  BlnIsRead?: boolean | undefined = false;

  BlnStartMessage?: boolean | undefined = false;

  BlnStopMessage?: boolean | undefined = false;

  DatDateSent?: string | undefined = '';

  DatMessageStart?: string | undefined = '';

  DatMessageStop?: string | undefined = '';

  IntMessageType?: number | undefined = 0;

  LngRecordId?: number | undefined = 0;

  ObjBooleanInputSendEmail?: BooleanInputImpl | undefined;

  ObjBooleanInputSendSMS?: BooleanInputImpl | undefined;

  ObjBooleanInputSendTCP?: BooleanInputImpl | undefined;

  StrFormattedMessageReadDateTime?: string | undefined = '';

  StrFormattedMessageSentDate?: string | undefined = '';

  StrFormattedMessageStartDateTime?: string | undefined = '';

  StrFormattedMessageStopDateTime?: string | undefined = '';

  StrMessage?: string | undefined = '';

  StrRecipientsInformation?: string | undefined = '';

  StrSentByUserId?: string | undefined = '';

  TimMessageStart?: string | undefined = '';

  TimMessageStop?: string | undefined = '';

  getKey() {
    return this.LngRecordId;
  }

  toggleMarkAsRead() {
    this.BlnIsRead = !this.BlnIsRead;
  }

  init(data?: EmployeeMessageModel) {
    if (!data) {
      return;
    }

    this.ObjBooleanInputSendEmail =
      this.ObjBooleanInputSendEmail !== undefined
        ? AbstractImpl.fromJSON(data.ObjBooleanInputSendEmail, BooleanInputImpl)
        : undefined;

    this.ObjBooleanInputSendSMS =
      this.ObjBooleanInputSendSMS !== undefined
        ? AbstractImpl.fromJSON(data.ObjBooleanInputSendSMS, BooleanInputImpl)
        : undefined;

    this.ObjBooleanInputSendTCP =
      this.ObjBooleanInputSendTCP !== undefined
        ? AbstractImpl.fromJSON(data.ObjBooleanInputSendTCP, BooleanInputImpl)
        : undefined;
  }
}
