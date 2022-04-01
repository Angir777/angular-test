import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/shared/models/Task';
import { EditTaskService } from 'src/app/shared/services/edit-task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [
    // new Task('Iść do domu', 'Szybko'),
    // new Task('Kupić coś', 'Lorem ipsum'),
    // new Task('Grać w gre', 'Tomb Rider'),
  ];

  // tasks$: Observable<Task[]>;

  constructor(
    private editTaskService: EditTaskService
  ) {
    // this.tasks$ = this.editTaskService.getTasks();
  }

  ngOnInit(): void {
    this.editTaskService.getTasks().subscribe(res => this.tasks = res);
  }

  getTasks() {
    // this.tasks$ = this.editTaskService.getTasks();
  }

  getClassByStatus(isEven: boolean) {
    return isEven ? 'is-even' : 'is-odd';
  }

  getIsTextCenter(isEven: boolean) {
    return isEven ? 'text-center' : ''
  }

  onTaskAdded(task: Task) {
    this.tasks.push(task);
    // this.editTaskService.addTask(task);
    // this.getTasks();
  }

  delete(task: Task) {
    // sposób 1
    // const index = this.tasks.findIndex(x => x.title === task.title);
    // this.tasks.splice(index, 1);

    // sposób 2
    this.tasks = this.tasks.filter(x => x.title !== task.title);

    // sposób 3 z async serwiser
    // this.editTaskService.deleteTask(task);
    // this.getTasks();
  }
}
