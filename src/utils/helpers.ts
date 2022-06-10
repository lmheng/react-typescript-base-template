import { IFile } from "../types/utilities/IFile";
import { handleError } from "./response";

const isValid = (data: any): boolean => {
  return !(data === undefined || data === null);
};

const isValidText = (data: any): boolean => {
  return isValid(data) && data !== "";
};

const isFile = (data: any): boolean => {
  return data instanceof File;
};

const isNumber = (data: any): boolean => {
  return !isNaN(data);
};

const isValidArray = (data: any): boolean => {
  const isValidData = isValid(data);
  const isArray = isValidData && data instanceof Array;

  return isArray;
};

const convertFileToBase64 = async (file: any): Promise<any> => {
  try {
    if (isFile(file)) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = function (error) {
          reject(error);
        };
      });
    }
  } catch (error) {
    handleError;
  }
  return "";
};

const downloadBase64 = (file: IFile): any => {
  const append = `data:${file.mimeType};base64,`;
  const linkSource = `${append}${file.fileBytes}`;
  const downloadLink = document.createElement("a");
  const fileName = file.fileName;

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};

const parseValueString = (data: any): string => {
  try {
    if (isValidText(data)) return data;
  } catch (error) {
    handleError;
  }
  return "";
};

const parseValueInteger = (data: any): number => {
  try {
    if (isNumber(data)) return data;

    if (!isNumber(data)) return parseInt(data);
  } catch (error) {
    handleError;
  }
  return 0;
};

const parseValueDecimal = (data: any): number => {
  try {
    if (isNumber(data)) return data;

    if (!isNumber(data)) return parseFloat(data);
  } catch (error) {
    handleError;
  }
  return 0.0;
};

const parseValueBoolean = (data: any): boolean => {
  try {
    if (isValid(data)) {
      if (typeof data === "boolean") return data;
      if (typeof data === "string")
        return data != "" && (data === "true" || data === "1") ? true : false;
    }
  } catch (error) {
    handleError;
  }
  return false;
};

export const Helper = {
  isValid,
  isValidText,
  isFile,
  isNumber,
  isValidArray,
  convertFileToBase64,
  downloadBase64,
  parseValueString,
  parseValueInteger,
  parseValueDecimal,
  parseValueBoolean,
};
