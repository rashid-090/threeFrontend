export const PHONE_REGEX = /^\d{10}$/;
export const ALTERNATE_PHONE_REGEX = /^\d{10}|\d{11}$/;
export const PASSWORD_REGEX =
  /^(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[0-9])(?=.{8,}).*$/;
export const PINCODE_REGEX = /^[1-9][0-9]{5}$/;
export const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const PAN_REGEX = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
export const ALPHABET_REGEX = /^[a-z A-Z]+$/;
export const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9_,]*$/;
// export const POSITIVE_NUMBER_REGEX = /^d+|([0-9]+\.?\d{2})$/;
export const POSITIVE_NUMBER_REGEX = /^(\.\d+)|[0-9]\d*(\.\d+)?$/;