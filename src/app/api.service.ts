import { Injectable } from '@angular/core';
import axios, { AxiosResponse, AxiosError } from 'axios'; // Import AxiosResponse dan AxiosError
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public uriApi: string = 'https://greenland-foresthill.id/rest-api/index.php/';

  constructor(private storage: Storage) { }
  async login(username: string, password: string) {
    console.log(username && password)
    try {
      let url =
        this.uriApi + 'login?username=' +
        username +
        '&password=' +
        password;
      const res = await axios.get(url);
      if (res.data.status == 'Ok') {
        let data = res.data.result[0];
        const storage = await this.storage.create();
        storage.set('isLoggedIn', data.nik);
        localStorage.setItem('isLoggedIn', data.nik);
        return 'success';
      } else {
        return 'notFound';
      }
    } catch (err: any) {
      console.log(err)
      if (err.response.data.message == 'User not found!') {
        return 'notFound';
      } else {
        return 'err';
      }
    }
  } 
}
