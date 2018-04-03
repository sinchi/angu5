import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode, ErrorHandler } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { IAppState, rootReducer, INITIAL_STATE } from './state';
import { CommonModule } from '@angular/common';
import { InputFormatDirective } from './directives/input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { NewCourseFormBuilderComponent } from './new-course-form-builder/new-course-form-builder.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodosComponent,
    TodoComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    NewCourseFormBuilderComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgReduxModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    AuthModule,
    AppRoutingModule
   // DevToolsExtension
  ],
  providers: [PostService, {
    provide: ErrorHandler, useClass: AppErrorHandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTools: DevToolsExtension
  ) {
    const enhancers = isDevMode() ? [this.devTools.enhancer()] : [] ;
    this.ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
 }
