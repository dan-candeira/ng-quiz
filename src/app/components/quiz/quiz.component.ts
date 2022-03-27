import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quizzes;
  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.loadQuizes().subscribe((resp) => {
      this.quizzes = resp.quizzes;
    });
  }
}
