import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../model/quiz';
import { BaseServiceService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService extends BaseServiceService<Quiz> {

  constructor(
    public http: HttpClient
  ) {
    super(http, 'quizes')
  }
}
