export interface LoginFormData {
  email: string;
  password: string;
}

export enum OAuthStrategy {
  Facebook = "oauth_facebook",
  Google = "oauth_google",
}
