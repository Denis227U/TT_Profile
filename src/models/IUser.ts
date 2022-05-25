export interface IAddress {
  city: string;
  street: string;
  zipcode: string;
}

export interface ICompany {
  name: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: IAddress;
  company: ICompany;
}
