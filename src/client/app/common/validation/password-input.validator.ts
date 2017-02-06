import {ValidatorFn, FormControl} from "@angular/forms";

const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const ValidatePassWord: ValidatorFn = (c: FormControl) => {
  if (c.value == null || c.value === '') {
    return null;
  }
  return PASSWORD_REGEXP.test(c.value) ? null : {
        validateEmail: {
          valid: false
        }
      };
};
