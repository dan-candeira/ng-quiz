import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnChanges {
  quiz: any = {
    _id: null,
    title: null,
    description: null,
    level: null,
    team: null,
    type: null,
    rewardXp: null,
    options: [],
  };

  @Output() sendQuiz = new EventEmitter();
  @Input() quizData: any = null;

  ngOnChanges(changes: SimpleChanges) {
    if (this.quizData) {
      let data: any = {};
      Object.entries(this.quizData?.quiz).forEach(([key, value]): any => {
        data[key] = value;
      });
      this.quiz = data;
    }
  }

  onSend(): void {
    this.sendQuiz.emit(this.quiz);
  }
}
