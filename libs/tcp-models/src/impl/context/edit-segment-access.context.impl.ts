import { EditSegmentAccessContext } from '../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class EditSegmentAccessContextImpl extends AbstractImpl implements EditSegmentAccessContext {
  BlnCanAddNote?: boolean | undefined = false;

  BlnCanEditBreakType?: boolean | undefined = false;

  BlnCanEditCostCode?: boolean | undefined = false;

  BlnCanEditCoveredEmployee?: boolean | undefined = false;

  BlnCanEditDateIn?: boolean | undefined = false;

  BlnCanEditDateOut?: boolean | undefined = false;

  BlnCanEditExtraSettings?: boolean | undefined = false;

  BlnCanEditJobCode?: boolean | undefined = false;

  BlnCanEditLaborCodes?: boolean | undefined = false;

  BlnCanEditRate?: boolean | undefined = false;

  BlnCanEditTimeIn?: boolean | undefined = false;

  BlnCanEditTimeOut?: boolean | undefined = false;

  BlnCanEditTimeSheet?: boolean | undefined = false;

  BlnCanViewActualDateIn?: boolean | undefined = false;

  BlnCanViewActualDateOut?: boolean | undefined = false;

  BlnCanViewActualTimeIn?: boolean | undefined = false;

  BlnCanViewActualTimeOut?: boolean | undefined = false;

  BlnCanViewBreakType?: boolean | undefined = false;

  BlnCanViewCostCode?: boolean | undefined = false;

  BlnCanViewCoveredEmployee?: boolean | undefined = false;

  BlnCanViewDateIn?: boolean | undefined = false;

  BlnCanViewDateOut?: boolean | undefined = false;

  BlnCanViewGeoLocation?: boolean | undefined = false;

  BlnCanViewJobCode?: boolean | undefined = false;

  BlnCanViewLaborCodes?: boolean | undefined = false;

  BlnCanViewLaborStandard?: boolean | undefined = false;

  BlnCanViewNote?: boolean | undefined = false;

  BlnCanViewRate?: boolean | undefined = false;

  BlnCanViewTimeIn?: boolean | undefined = false;

  BlnCanViewTimeOut?: boolean | undefined = false;

  BlnCanViewTimeSheet?: boolean | undefined = false;

  BlnRequiresCostCode?: boolean | undefined = false;

  BlnRequiresShiftNote?: boolean | undefined = false;

  BlnSubSearchModuleEnabled?: boolean | undefined = false;

  canAccessDateTimeIn() {
    return this.BlnCanViewDateIn || this.BlnCanViewTimeIn;
  }

  canAccessDateTimeOut() {
    return this.BlnCanViewDateOut || this.BlnCanViewTimeOut;
  }
}
