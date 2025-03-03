import { v4 as uuidv4 } from "uuid";

const HOME_ROUTE = "/"
const LOGIN_ROUTE = "login"
const UPLOAD_ROUTE = "upload"
const LIBRARY_ROUTE = "library"
const ACCOUNT_ROUTE = "account"

export interface Route {
  title: string;
  path: string;
  id: string;
  auth?: boolean;
}

export const APP_ROUTES: Record<string, Route> = {
  home: {
    title: "Home",
    path: HOME_ROUTE,
    id: uuidv4(),
  },
  login: {
    title: "Login",
    path: LOGIN_ROUTE,
    id: uuidv4(),
  },
  upload: {
    title: "Upload",
    path: UPLOAD_ROUTE,
    id: uuidv4(),
  },
  library: {
    title: "Library",
    path: LIBRARY_ROUTE,
    id: uuidv4(),
  },
  account: {
    title: "Account",
    path: ACCOUNT_ROUTE,
    id: uuidv4(),
  }

}








