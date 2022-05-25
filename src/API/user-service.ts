import { IUser } from '../models/IUser';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default class UserService {
  static async getAll(limit = 10): Promise<IUser[]> {
    const response = await fetch(`${BASE_URL}/users?_limit=${limit}`);

    if (!response.ok) {
      throw new Error(`Произошла ошибка! Статус: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
}
