import { LogOnConfig, LogOnData } from '../../declaration';
import { LogOnDataImpl } from '../data';
import { LogOnConfigImpl } from '../config';
import { AbstractImpl } from '../abstract.impl';

export interface LogOnContext {
  ObjLogOnConfig: LogOnConfig | undefined;
  ObjLogOnData: LogOnData | undefined;
}

export class LogOnContextImpl extends AbstractImpl implements LogOnContext {
  ObjLogOnConfig: LogOnConfigImpl | undefined;
  ObjLogOnData: LogOnDataImpl | undefined;

  init(data: LogOnContext) {
    if (!data) {
      return;
    }

    this.ObjLogOnConfig =
      this.ObjLogOnConfig !== undefined ? AbstractImpl.fromJSON(data.ObjLogOnConfig, LogOnConfigImpl) : undefined;

    this.ObjLogOnData =
      this.ObjLogOnData !== undefined ? AbstractImpl.fromJSON(data.ObjLogOnData, LogOnDataImpl) : undefined;
  }
}
