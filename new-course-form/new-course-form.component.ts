import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      topics: new FormArray([])
    });
   }

  ngOnInit() {
  }

  get topics(): FormArray {
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement): void {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl): void {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

}
