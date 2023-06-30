import { ERROR_CHECK_LIST_TYPE } from "../../constants";

/* eslint-disable default-case */
export const validateInputHelper = (
  type = "username",
  value,
  listError = {}
) => {
  let error = null;

  for (let key in listError) {
    switch (key) {
      case "required":
        error = !value ? ERROR_CHECK_LIST_TYPE[key] : null;
        break;
      case "minLength":
        error =
          value.length < +listError[key]
            ? ERROR_CHECK_LIST_TYPE[key] + listError[key] + " kí tự"
            : null;
        break;
      case "maxLength":
        error =
          value.length > +listError[key]
            ? ERROR_CHECK_LIST_TYPE[key] + listError[key] + " kí tự"
            : null;
        break;
    }
    if (error) {
      break;
    }
  }
  return error;
};

export const parseValid = (validString) => {
  if (!validString) return {};

  // b1 tach chuoi theo  "|"
  const arrayError = validString.split("|");
  // b2 lap qua tung phan
  return arrayError.reduce((pre, cur) => {
    // b3 tach theo ":"
    const [key, value = true] = cur.split(":");
    // b4 nhet vao object
    return { ...pre, [key]: value };
  }, {});
};
