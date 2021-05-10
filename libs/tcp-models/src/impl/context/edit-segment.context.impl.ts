import { AbstractImpl } from '../abstract.impl';
import { EditTimesheetSegmentConfigImpl } from '../config/edit-timesheet-segment.config.impl';
import { EditSegmentDataImpl } from '../data/edit-segment.data.impl';

export interface EditSegmentContext {
  editTimesheetSegmentConfig: EditTimesheetSegmentConfigImpl | undefined;
  editSegmentData: EditSegmentDataImpl | undefined;
}

export class EditSegmentContextImpl extends AbstractImpl implements EditSegmentContext {
  editSegmentData: EditSegmentDataImpl | undefined = undefined;

  editTimesheetSegmentConfig: EditTimesheetSegmentConfigImpl | undefined = undefined;

  init(data: EditSegmentContextImpl) {
    if (!data) {
      return;
    }

    this.editSegmentData = this.editSegmentData
      ? AbstractImpl.fromJSON(data.editSegmentData, EditSegmentDataImpl)
      : undefined;

    this.editTimesheetSegmentConfig = this.editTimesheetSegmentConfig
      ? AbstractImpl.fromJSON(data.editTimesheetSegmentConfig, EditTimesheetSegmentConfigImpl)
      : undefined;
  }

  getScreenTitle() {
    if (!this.editTimesheetSegmentConfig || !this.editTimesheetSegmentConfig.StrTitle) {
      return '';
    }

    return this.editTimesheetSegmentConfig.StrTitle;
  }
}
