import {Component, Input} from '@angular/core';
import Task from '../../data/Task';
import {CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.sass'
})
export class TaskComponent {
  @Input() task: Task | undefined
}
