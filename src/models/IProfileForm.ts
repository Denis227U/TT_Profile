interface ITextField {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
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
