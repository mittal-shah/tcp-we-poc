import CostCodeInputImpl from '../domain/cost-code-input.impl'
import FilterDataImpl from './filter.data.impl'
import AbstractImpl from '../abstract.impl'
import { SelectCostCodeData } from '../../declarations/global'
import Util from '../../util/util'

export type CostCodeSearchDropdownContext = {
  ObjFilterData?: FilterDataImpl

  ArrCostCodeInputs?: CostCodeInputImpl[]
}

export default class SelectCostCodeDataImpl extends AbstractImpl implements SelectCostCodeData {
  ArrCostCodeInputs?: CostCodeInputImpl[] | undefined = []

  LngJobCodeRecordId?: number | undefined = 0

  ObjFilterData?: FilterDataImpl | undefined = undefined

  init(data: SelectCostCodeDataImpl) {
    if (!data) {
      return
    }

    this.copyTypedArray(data, 'ArrCostCodeInputs', CostCodeInputImpl)

    this.ObjFilterData =
      this.ObjFilterData !== undefined ? AbstractImpl.fromJSON(data.ObjFilterData, FilterDataImpl) : undefined
  }

  getCostCodeData(): CostCodeSearchDropdownContext {
    if (!this.ObjFilterData || !this.ObjFilterData.hasValidPagingData()) {
      return {
        ObjFilterData: undefined,
        ArrCostCodeInputs: undefined,
      }
    }

    return {
      ArrCostCodeInputs: this.ArrCostCodeInputs,
      ObjFilterData: this.ObjFilterData,
    } as CostCodeSearchDropdownContext
  }

  createSubmissionData() {
    const data = Util.cloneClassInstance<SelectCostCodeDataImpl>(this, SelectCostCodeDataImpl)

    delete data.ArrCostCodeInputs

    return data
  }

  updateJobCode(jobCodeId: string) {
    if (!this.LngJobCodeRecordId) {
      return this
    }

    this.LngJobCodeRecordId = parseFloat(jobCodeId)

    return this
  }
}
