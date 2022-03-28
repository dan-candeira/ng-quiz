import { Component, OnInit } from '@angular/core';
import { QuizService } from '@services/quiz.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css'],
})
export class QuizzesComponent implements OnInit {
  quizzes: any;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.loadQuizes().subscribe((resp) => {
      this.quizzes = resp.quizzes;
    });
  }
}
