import { EventEmitter } from '@angular/core';

export class APICallService {
  change = new EventEmitter<void>();

  async getJSON() {
    try {
      const res = await fetch('https://dummyjson.com/users');
      if (!res.ok) throw new Error(`Not found! (${res.status})`);
      const data = await res.json();

      return data.users.map((user: any) => {
        return {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          maidenName: user.maidenName,
          age: user.age,
          phone: user.phone,
        };
      });
    } catch (err) {
      throw err;
    }
  }
}
