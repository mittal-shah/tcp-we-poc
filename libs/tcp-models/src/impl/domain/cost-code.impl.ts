import { CostCodeModel } from '../../declarations/global';
import CustomFieldSectionImpl from './custom-field-section.impl';
import LaborStandardAssignmentContextImpl from '../context/labor-standard-assignment.context.impl';
import SelectItemImpl from './select-item.impl';
import AbstractImpl from '../abstract.impl';
import AssignedCostCodeOptionsDataImpl from '../data/assigned-cost-code-options.data.impl';

export default class CostCodeImpl extends SelectItemImpl implements CostCodeModel {
  ArrCustomFieldSections?: CustomFieldSectionImpl[] | undefined = [];

  BlnCanEdit?: boolean | undefined = false;

  BlnCanManageBranch?: boolean | undefined = false;

  BlnIsActive?: boolean | undefined = false;

  BlnIsBillable?: boolean | undefined = false;

  BlnIsUser1?: boolean | undefined = false;

  BlnIsUser2?: boolean | undefined = false;

  BlnIsUser3?: boolean | undefined = false;

  BlnIsUser4?: boolean | undefined = false;

  DatExpirationDate?: string | undefined = '';

  HrmHours?: string | undefined = '';

  IntExpirationOption?: number | undefined = 0;

  IntNumericAlias?: number | undefined = 0;

  LngRecordId?: number | undefined = 0;

  ObjAssignedCostCodeOptionsData?: AssignedCostCodeOptionsDataImpl | undefined;

  ObjLaborStandardAssignmentContext?: LaborStandardAssignmentContextImpl | undefined;

  StrBudgetDollars?: string | undefined = '';

  StrDateAdded?: string | undefined = '';

  StrDescription?: string | undefined = '';

  StrFullCode?: string | undefined = '';

  StrLevel1?: string | undefined = '';

  StrLevel2?: string | undefined = '';

  StrLevel3?: string | undefined = '';

  StrLevel4?: string | undefined = '';

  StrLevel5?: string | undefined = '';

  StrNotes?: string | undefined = '';

  StrStatus?: string | undefined = '';

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  init(data?: CostCodeModel) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrCustomFieldSections', CustomFieldSectionImpl);

    this.ObjAssignedCostCodeOptionsData =
      this.ObjAssignedCostCodeOptionsData !== undefined
        ? AbstractImpl.fromJSON(data.ObjAssignedCostCodeOptionsData, AssignedCostCodeOptionsDataImpl)
        : undefined;

    this.ObjLaborStandardAssignmentContext =
      this.ObjLaborStandardAssignmentContext !== undefined
        ? AbstractImpl.fromJSON(data.ObjLaborStandardAssignmentContext, LaborStandardAssignmentContextImpl)
        : undefined;
  }

  getKey() {
    return this.LngRecordId;
  }

  getText() {
    return this.StrFullCode;
  }

  getValue() {
    return this.LngRecordId;
  }

  isMatching(searchQuery = '') {
    return this.StrFullCode?.toLowerCase().includes(searchQuery.toLowerCase());
  }

  setText(text: string) {
    this.StrDescription = text;
  }

  setValue(value: number) {
    this.LngRecordId = value;
  }

  setLevel1(level1: string) {
    this.StrLevel1 = level1;
  }

  setLevel2(level2: string) {
    this.StrLevel2 = level2;
  }

  setLevel3(level3: string) {
    this.StrLevel3 = level3;
  }

  setLevel4(level4: string) {
    this.StrLevel4 = level4;
  }

  setLevel5(level5: string) {
    this.StrLevel5 = level5;
  }
}
