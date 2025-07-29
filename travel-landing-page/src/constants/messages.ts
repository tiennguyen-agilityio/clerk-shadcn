export const ERROR_MESSAGES = {
  SIGN_IN_FAILED: "Sign in failed.",
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  FIELD_INVALID: (fieldName: string) => `Invalid format of ${fieldName}`,
  PASSWORD_NOT_LONG: "Your password must be at least 8 characters long",
  PASSWORD_NOT_MATCH: "Password and Confirm password do not match",
  PASSWORD_NOT_HAVE_NUMBER: "Your password must contain at least one number",
  PASSWORD_NOT_HAVE_UPPERCASE: "Your password must contain at least one uppercase character",
  PASSWORD_NOT_HAVE_SYMBOL: "Your password must contain at least one special character",
  LOGIN_FAILED: "Email or password is incorrect!",
};
