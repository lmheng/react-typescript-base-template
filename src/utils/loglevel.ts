import log from "loglevel";
import { Configurations } from "../constants/configurations";
import { apiLogger } from "../services/developerServices/logger.service";
import { CookieService } from "./cookieservice";
import { Helper } from "./helpers";

// update so that we can get username from cookie
const user = CookieService.get(Configurations.TOKEN_NAME) || "Guest";
const remoteServer = process.env.REACT_APP_REMOTE_URL!;

log.enableAll();

const logInfo = (data: any, methodName: string) => {
  // use this to log information that may cause an error
  if (Helper.isValidObject(data)) {
    const msg = `Date: ${new Date()}: Action taken is ${methodName} with data ${JSON.stringify(
      data
    )} by ${user}`;

    log.info(msg);

    /* Remove comments for below only after logging endpoint has been set up 

    apiLogger(remoteServer).post({ authenticated: false });
    
    */
  }
};

const logError = (error: Error, methodName: string) => {
  // use this to log errors and cause of error
  const msg = `Date: ${new Date()}: Action taken is ${methodName} with error: ${JSON.stringify(
    error
  )} by ${user}`;

  log.error(msg);

  /* Remove comments for below only after logging endpoint has been set up 

  apiLogger(remoteServer).post({ authenticated: false });

  */
};

export const Logger = {
  logInfo,
  logError,
};

/* 
  Documentation can be found in "https://github.com/pimterry/loglevel"
  Loglevel remote has been imported from "https://github.com/kutuluk/loglevel-plugin-remote", 
  guide can be viewed from "https://www.loggly.com/blog/best-practices-for-client-side-logging-and-error-handling-in-react/"
*/
