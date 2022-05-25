import { IValidForm } from '../models/IProfileForm';

export function checkValidForm(obj: IValidForm): boolean {
  const validateObj = { ...obj };
  delete validateObj.comment;
  return Object.values(validateObj).every((error) => error);
}
