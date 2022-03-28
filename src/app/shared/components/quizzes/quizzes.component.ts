import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class QuizzesComponent {
  @Input() quizzes: any;

  @Output() deleteQuiz = new EventEmitter();

  constructor(private router: Router) {}

  onEditQuiz(event: string) {
    this.router.navigate(['edit', event]);
  }

  onDeleteQuiz(event: string) {
    this.deleteQuiz.emit(event);
  }
}
