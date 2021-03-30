import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  list$: BehaviorSubject<any>;

  constructor(private quizService: QuizService) {
    this.list$ = this.quizService.list$;
  }

  ngOnInit(): void {
  }

}
