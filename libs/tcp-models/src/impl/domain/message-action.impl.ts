import { AbstractImpl } from '../abstract.impl';
import { MessageActionModel } from '../../declaration';

export class MessageActionImpl extends AbstractImpl implements MessageActionModel {
  IntApplicationId: number | undefined = 0;

  StrActionCommand: string | undefined = '';

  StrCompanyNamespace: string | undefined = '';

  StrEntityToken: string | undefined = '';

  StrShowContinue: string | undefined = '';
}
