import { AddTaskComponent } from 'src/app/components/add-taks/task-form.component';
import { HeaderComponent } from './../../components/header/header.component';
import { TasksComponent } from './tasks.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [TasksComponent, HeaderComponent, AddTaskComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ]
})
export class TasksModule { }
