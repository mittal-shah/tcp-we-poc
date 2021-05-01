import FilterDataImpl from '../data/filter.data.impl'
import { LaborStandardAssignmentContext } from '../../declarations/global'
import AbstractImpl from '../abstract.impl'
import LaborStandardAssignmentImpl from '../domain/labor-standard-assignment.impl'

export default class LaborStandardAssignmentContextImpl extends AbstractImpl implements LaborStandardAssignmentContext {
  ArrLaborStandardAssignments?: LaborStandardAssignmentImpl[] | undefined = []

  BlnCanAssign?: boolean | undefined = false

  BlnCanEdit?: boolean | undefined = false

  BlnCanUnassign?: boolean | undefined = false

  ObjFilterData?: FilterDataImpl | undefined

  StrCommand?: string | undefined = ''

  StrExpectedAmount?: string | undefined = ''

  StrHelp?: string | undefined = ''

  StrInheritedFrom?: string | undefined = ''

  StrTitle?: string | undefined = ''

  init(data?: LaborStandardAssignmentContext) {
    if (!data) {
      return
    }

    this.copyTypedArray(data, 'ArrLaborStandardAssignments', LaborStandardAssignmentImpl)

    this.ObjFilterData =
      this.ObjFilterData !== undefined ? AbstractImpl.fromJSON(data.ObjFilterData, FilterDataImpl) : undefined
  }
}
