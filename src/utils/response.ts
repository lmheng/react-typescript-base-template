import { Logger } from "./loglevel";

export const handleResponse = <T>(response: T, api: string) => {
  Logger.logInfo(response, api);
  return response;
};

export const handleError = <T extends Error>(error: T, methodName: string) => {
  Logger.logError(error, methodName);
  return error;
};
