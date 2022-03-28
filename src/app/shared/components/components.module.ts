import { NgModule } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';

@NgModule({
  declarations: [QuizComponent, QuizzesComponent],
  exports: [QuizComponent, QuizzesComponent],
})
export class ComponentsModule {}
