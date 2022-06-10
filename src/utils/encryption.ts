import * as CryptoJS from "crypto-js";

const ENCRYPT_KEY: string = process.env.ENCRYPT_KEY!;
const ENCRYPT_PHRASE: string = process.env.ENCRYPT_PHRASE!;

const encrypt = (input: any): string => {
  const key = CryptoJS.enc.Utf8.parse(ENCRYPT_KEY);

  const encrypted = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(JSON.stringify(input)),
    ENCRYPT_PHRASE,
    key
  );

  const e64 = CryptoJS.enc.Base64.parse(encrypted.toString());
  const eHex = e64.toString(CryptoJS.enc.Hex);

  return eHex;
};

const decrypt = (input: string): any => {
  const key = CryptoJS.enc.Utf8.parse(ENCRYPT_KEY);

  const reb64 = CryptoJS.enc.Hex.parse(input);
  const bytes = reb64.toString(CryptoJS.enc.Base64);

  const decrypted = CryptoJS.AES.decrypt(bytes, ENCRYPT_PHRASE, key);

  return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
};

export const Crypto = {
  encrypt,
  decrypt,
};
