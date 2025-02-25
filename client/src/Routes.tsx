const HOME_ROUTE = "/"
const LOGIN_ROUTE = "login"
const UPLOAD_ROUTE = "upload"
const LIBRARY_ROUTE = "library"
const ACCOUNT_ROUTE = "account"

export interface Route {
  title: string;
  path: string;
  auth?: boolean;
}

export const APP_ROUTES: Record<string, Route> = {
  home: {
    title: "Home",
    path: HOME_ROUTE,
  },
  login: {
    title: "Login",
    path: LOGIN_ROUTE
  },
  upload: {
    title: "Upload",
    path: UPLOAD_ROUTE,
  },
  library: {
    title: "Library",
    path: LIBRARY_ROUTE,
  },
  account: {
    title: "Account",
    path: ACCOUNT_ROUTE
  }

}








