import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TasksComponent,
    UpdateTaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TaskModule { }
