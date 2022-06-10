import log from "loglevel";
import { Helper } from "./helpers";

// update so that we can get username from cookie
const user = "";

log.enableAll();

const logInfo = (data: any) => {
  // use this to log information that may cause an error
  if (Helper.isValidObject(data))
    log.info(`Data sent: ${JSON.stringify(data)} by ${user}`);
};

const logError = (error: Error) => {
  // use this to log errors and cause of error
  log.error(`Error: ${JSON.stringify(error)} by ${user}`);
};

export const Logger = {
  logInfo,
  logError,
};

//Documentation can be found in "https://github.com/pimterry/loglevel"
