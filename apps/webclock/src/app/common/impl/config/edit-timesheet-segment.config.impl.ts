import { EditTimesheetSegmentConfig } from '../../declarations/global'
import AbstractImpl from '../abstract.impl'
import EditSegmentConfigImpl from './edit-segment.config.impl'

export default class EditTimesheetSegmentConfigImpl extends AbstractImpl implements EditTimesheetSegmentConfig {
  ObjEditSegmentConfig?: EditSegmentConfigImpl | undefined = undefined

  StrLeaveCode?: string | undefined = ''

  StrTitle?: string | undefined = ''

  init(data: EditTimesheetSegmentConfigImpl) {
    if (!data) {
      return
    }

    this.ObjEditSegmentConfig =
      this.ObjEditSegmentConfig !== undefined
        ? AbstractImpl.fromJSON(data.ObjEditSegmentConfig, EditSegmentConfigImpl)
        : undefined
  }

  getMaxDateOut() {
    if (!this.ObjEditSegmentConfig) {
      return ''
    }

    return this.ObjEditSegmentConfig.getMaxDateOut()
  }
}
