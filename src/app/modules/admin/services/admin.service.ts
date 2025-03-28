import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule if not already imported
import { Observable } from 'rxjs'; // Adjust the path as needed
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASIC_URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(BASIC_URL + 'api/admin/users', {
    headers: this.createAuthorationHeader(),
   });
  }

  private createAuthorationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + StorageService.getToken()
    )
  }

  getAllTasks():Observable<any>{
    return this.http.get(BASIC_URL + 'api/admin/tasks', {
    headers: this.createAuthorationHeader(),
   });
  }
}
