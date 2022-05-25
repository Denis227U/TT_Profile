import { IUser } from '../models/IUser';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default class UserService {
  static async getAll(limit = 10): Promise<IUser[]> {
    const response = await fetch(`${BASE_URL}/users?_limit=${limit}`);

    if (!response.ok) {
      throw new Error(`Статус ошибки: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  static async getById(id: number): Promise<IUser> {
    const response = await fetch(`${BASE_URL}/users/${id}`);

    if (!response.ok) {
      throw new Error(`Статус ошибки: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
}
