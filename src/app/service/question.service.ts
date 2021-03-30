import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../model/question';
import { BaseServiceService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseServiceService<Question> {

  constructor(
    public http: HttpClient
  ) {
    super(http, 'questions')
  }
}
