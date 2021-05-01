import CompanyConfigImpl from '../impl/config/company.config.impl'
import AppConfigImpl from '../impl/config/app.config.impl'

export class GlobalConstant {
  public static sessionId: string | undefined = ''
  public static appConfig: AppConfigImpl | undefined = undefined
  public static companyConfig: CompanyConfigImpl | undefined = undefined
}
