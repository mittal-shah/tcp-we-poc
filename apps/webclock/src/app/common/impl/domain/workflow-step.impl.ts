import AbstractImpl from '../abstract.impl'
import { WorkflowStepModel } from '../../declarations/global'

export default class WorkflowStepImpl extends AbstractImpl implements WorkflowStepModel {
  BlnCanCancel?: boolean | undefined = false

  BlnCanFinish?: boolean | undefined = false

  BlnCanPreview?: boolean | undefined = false

  BlnCanProgress?: boolean | undefined = false

  BlnCanRevert?: boolean | undefined = false

  IntProgress?: number | undefined = 0

  StrBack?: string | undefined = ''

  StrCancel?: string | undefined = ''

  StrCommand?: string | undefined = ''

  StrFinish?: string | undefined = ''

  StrNext?: string | undefined = ''

  StrPreview?: string | undefined = ''

  StrSubtitle?: string | undefined = ''

  StrSuggestion?: string | undefined = ''

  StrSummary?: string | undefined = ''

  StrTitle?: string | undefined = ''
}
