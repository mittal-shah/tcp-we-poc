import { ProgressStatusModel } from '../../declarations/global'
import AbstractImpl from '../abstract.impl'

export default class ProgressStatusImpl extends AbstractImpl implements ProgressStatusModel {
  BlnDisableOkButton?: boolean | undefined = false

  BlnHasExceptions?: boolean | undefined = false

  BlnHasFilterDetails?: boolean | undefined = false

  BlnIsInProgress?: boolean | undefined = false

  IntFailures?: number | undefined = 0

  IntProgressPercent?: number | undefined = 0

  IntSuccesses?: number | undefined = 0

  StrDownloadUrl?: string | undefined = ''

  StrFailure?: string | undefined = ''

  StrProgressMessage?: string | undefined = ''

  StrSuccess?: string | undefined = ''

  isProgressComplete() {
    return this.IntProgressPercent === 100
  }
}
