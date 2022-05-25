interface IValidations {
  isEmpty: boolean;
  minLength: boolean;
}

interface ITextField extends IValidations {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isDirty: boolean;
}

export interface IProfileForm {
  name: ITextField;
  username: ITextField;
  email: ITextField;
  phone: ITextField;
  website: ITextField;
  street: ITextField;
  city: ITextField;
  zipCode: ITextField;
  comment: ITextField;
}

export interface IValidForm {
  name: string | boolean;
  username: string | boolean;
  email: string | boolean;
  street: string | boolean;
  city: string | boolean;
  zipCode: string | boolean;
  phone: string | boolean;
  website: string | boolean;
  comment?: string | boolean;
}
