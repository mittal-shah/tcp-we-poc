import { EditSegmentConfig } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';

export class EditSegmentConfigImpl extends AbstractImpl implements EditSegmentConfig {
  BlnCanEnableRate: boolean | undefined = false;

  DatMaxDate: string | undefined = undefined;

  DatMaxDateOut: string | undefined = undefined;

  DatMinDate: string | undefined = undefined;

  IntMaxTimesheetMinutes: number | undefined = 0;

  IntMinTimesheetMinutes: number | undefined = 0;

  IntNoteMaxLength: number | undefined = 0;

  StrClockedIn: string | undefined = '';

  StrNoteLabel: string | undefined = '';

  getMaxDateOut() {
    return this.DatMaxDateOut || this.DatMaxDate;
  }
}
