enum ExceptionType {
  Presentation = 0,
  Confirmation = 20,
  ConfirmationDeactivate = 21,
  ConfirmationUnassign = 22,
  ConfirmationVariance = 23,
  ConfirmationBioVerification = 24,
  ConfirmationClearVariance = 25,
  ConfirmationOfferExist = 26,
  ConfirmationOfferTime = 27,
  Connectivity = 29,
  CurrentWeekStale = 30,
  Information = 50,
  InvalidSession = 55,
  Persistence = 60,
  InvalidHub = 65,
  Workflow = 70,
  Unexpected = 99,
  UnableToReachServer = 100,
  ConfirmNegativeAccrualBalance = 101,
  EmployeePassword = 102,
  EmployeePasswordAndPin = 103,
  DefaultGlobalException = -1
}

export default ExceptionType;
