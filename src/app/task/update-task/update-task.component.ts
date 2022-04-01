import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/shared/models/Task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {
  @Input() formTitle: string = '';
  @Output() taskAdded = new EventEmitter();

  title: string = '';
  description: string = '';

  task!: Task;

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.createForm();

    this.task = {
      title: '123',
      description: 'asd',
      isDone: false
    };

    this.patchFormValue('Test', 'Test2');
  }

  ngOnInit(): void {}

  patchFormValue(title: string, description: string) {
    this.form.patchValue({
      title: title,
      description: description
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  ngModelFormSubmit() {
    const newTask = new Task(this.title, this.description);
    this.passTaskToParent(newTask);
  }

  ngModelForm2Submit() {
    this.passTaskToParent(this.task);
  }

  formGroupSubmit() {
    if (!this.form.valid) {
        alert('Formularz nie został poprawnie wypełniony');
        return;
    }

    this.passTaskToParent(this.createFromForm());
    
    this.form.reset();
    // this.form.patchValue({
    //   title: null,
    //   description: null,
    // });
  }

  createFromForm(): Task {
    const task: Task = {
      title: this.form.get('title')?.value,
      description: this.form.get('description')?.value,
      isDone: false
    }

    return task;
  }

  passTaskToParent(task: Task) {
    this.taskAdded.emit(task);
  }
}
