import { AbstractImpl } from '../abstract.impl';
import { JobCodeBreakdownModel } from '../../declaration';

export class JobCodeBreakdownImpl extends AbstractImpl implements JobCodeBreakdownModel {
  BlnIsTotal: boolean | undefined = false;

  StrDescription: string | undefined = '';

  StrOvertime1: string | undefined = '';

  StrOvertime2: string | undefined = '';

  StrRegular: string | undefined = '';

  StrTotal: string | undefined = '';
}
