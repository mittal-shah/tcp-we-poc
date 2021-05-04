import { AppConfigImpl, CompanyConfigImpl } from '../impl';

export class GlobalConstant {
  public static sessionId: string | undefined = '';
  public static appConfig: AppConfigImpl | undefined = undefined;
  public static companyConfig: CompanyConfigImpl | undefined = undefined;
}
