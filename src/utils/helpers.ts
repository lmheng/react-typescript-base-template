import { IBlobFile, IFile } from "../types/utilities/IFile";
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

const isDate = (data: any): boolean => {
  return data instanceof Date;
};

const isValidArray = (data: any): boolean => {
  const isValidData = isValid(data);
  const isArray = isValidData && data instanceof Array;

  return isArray;
};

const isValidObject = (data: any): boolean => {
  return data instanceof Object;
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
  } catch (error: any) {
    handleError(error, convertFileToBase64.name);
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

const downloadArrayBuffer = (file: IBlobFile): any => {
  file.buffer
    .then((buff) => {
      let blob = new Blob([buff], { type: file.type });
      let url = URL.createObjectURL(blob);
      window.open(url);
    })
    .catch((error) => handleError(error, downloadArrayBuffer.name));
};

const parseValueString = (data: any): string => {
  try {
    if (isValidText(data)) return data;
  } catch (error: any) {
    handleError(error, parseValueString.name);
  }
  return "";
};

const parseValueInteger = (data: any): number => {
  try {
    if (isNumber(data)) return data;

    if (!isNumber(data)) return parseInt(data);
  } catch (error: any) {
    handleError(error, parseValueInteger.name);
  }
  return 0;
};

const parseValueDecimal = (data: any): number => {
  try {
    if (isNumber(data)) return data;

    if (!isNumber(data)) return parseFloat(data);
  } catch (error: any) {
    handleError(error, parseValueDecimal.name);
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
  } catch (error: any) {
    handleError(error, parseValueBoolean.name);
  }
  return false;
};

const parseValueDate = (data: any): Date => {
  try {
    if (isDate(data)) {
      return data;
    }

    if (!isDate(data)) {
      return new Date(data);
    }
  } catch (error: any) {
    handleError(error, parseValueDate.name);
  }
  return new Date();
};

const getConstantColour = (colourCode: string): any => {
  const style = getComputedStyle(document.body);
  return style.getPropertyValue(colourCode);
};

export const Helper = {
  isValid,
  isValidText,
  isFile,
  isNumber,
  isDate,
  isValidArray,
  isValidObject,
  convertFileToBase64,
  downloadBase64,
  downloadArrayBuffer,
  parseValueString,
  parseValueInteger,
  parseValueDecimal,
  parseValueBoolean,
  parseValueDate,
  getConstantColour,
};
