import { Injectable } from '@angular/core';
import { filter, map, Observable, Observer, of, share, Subscription } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class EditTaskService {
  tasks: Task[] = [
    new Task('Iść do domu', 'Szybko'),
    new Task('Kupić coś', 'Lorem ipsum'),
    new Task('Grać w gre', 'Tomb Rider'),
  ];
  
  constructor() {
    
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(x => x.title !== task.title);
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
