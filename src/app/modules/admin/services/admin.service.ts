import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule if not already imported
<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
import { Observable } from 'rxjs'; // Adjust the path as needed
>>>>>>> b02df0fc476019b8d3ed33df90d45bce2f551153
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASIC_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  getUsers():Observable<any>{
    return this.http.get(BASIC_URL + 'apo/admin/users', {
    headers: this.createAuthorationHeader(),
   });
  }
  private createAuthorationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + StorageService.getToken()
    )
  }
}
