import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';

@NgModule({
  declarations: [QuizComponent, QuizzesComponent],
  exports: [QuizComponent, QuizzesComponent],
  imports: [BrowserModule],
})
export class ComponentsModule {}
