import { ContractVarianceModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';

export class ContractVarianceImpl extends AbstractImpl implements ContractVarianceModel {
  BlnIsFilled: boolean | undefined = false;

  IntVariance: number | undefined = 0;

  LngContractRecordId: number | undefined = 0;

  StrContractName: string | undefined = '';
}
