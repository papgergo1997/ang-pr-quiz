import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { BaseServiceService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseServiceService<Student> {

  constructor(
    public http: HttpClient
  ) {
    super(http, 'students');
  }
}
