import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class QuizzesComponent {
  @Input() quizzes: any;
}
