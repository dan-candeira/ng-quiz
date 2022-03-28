import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { QuizService } from '@services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  quizzes: any;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.loadQuizes().subscribe((resp) => {
      this.quizzes = resp.quizzes;
    });
  }
}
