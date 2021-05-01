import { DataTypeMapModel } from '../../declarations/global';

export default class DataTypeMapImpl implements DataTypeMapModel {
  IntAllowedCharacters?: number | undefined = 0;

  IntAlpha?: number | undefined = 0;

  IntAlphaNumeric?: number | undefined = 0;

  IntAlphaNumericWithSymbols?: number | undefined = 0;

  IntCustomFormat?: number | undefined = 0;

  IntFullDate?: number | undefined = 0;

  IntNumeric?: number | undefined = 0;

  IntPartialDate?: number | undefined = 0;

  IntTime?: number | undefined = 0;
}
