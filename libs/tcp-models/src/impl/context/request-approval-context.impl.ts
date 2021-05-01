import { BooleanInputModel, RequestApprovalContext } from '../../declarations/global';
import BooleanInputImpl from '../domain/input/boolean.input.impl';
import AbstractImpl from '../abstract.impl';

export default class RequestApprovalContextImpl extends AbstractImpl implements RequestApprovalContext {
  ArrBooleanInputApprovalLevels?: BooleanInputModel[] | undefined = [];

  ObjBooleanInputOverrideEmployeeSettings?: BooleanInputModel | undefined;

  ObjBooleanInputOverrideRole?: BooleanInputModel | undefined;

  StrApprovalLevels?: string | undefined = '';

  init(data?: RequestApprovalContext) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrBooleanInputApprovalLevels', BooleanInputImpl);

    this.ObjBooleanInputOverrideEmployeeSettings =
      this.ObjBooleanInputOverrideEmployeeSettings !== undefined
        ? AbstractImpl.fromJSON(data.ObjBooleanInputOverrideEmployeeSettings, BooleanInputImpl)
        : undefined;

    this.ObjBooleanInputOverrideRole =
      this.ObjBooleanInputOverrideRole !== undefined
        ? AbstractImpl.fromJSON(data.ObjBooleanInputOverrideRole, BooleanInputImpl)
        : undefined;
  }
}
