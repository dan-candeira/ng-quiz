import { Component } from '@angular/core';
import { QuizService } from '@services/quiz.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  constructor(private quizService: QuizService) {}

  onSendForm(data: any): void {
    this.quizService.createQuizzes(data);
  }
}
