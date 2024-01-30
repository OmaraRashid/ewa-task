import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class MobileQueryService {
  constructor(private http: HttpClient) { }

  getByPhoneNumber(phoneNumber: string) {
    return this.http.get<User[]>(`https://wddkstage.azurewebsites.net/api/user/getByPhoneNumber?phoneNumber=${phoneNumber}`);
  }

  signUp(fullname: string, mobile: string) {
    return this.http.post('https://wddkstage.azurewebsites.net/api/user/signup', { fullname, mobile });
  }
}
