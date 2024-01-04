import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import Task from "../../data/Task"
import localStorage from "../../data/localStorage";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.sass'
})
export class TaskComponent implements OnInit {
  @Input() task!: Task
  @Input() idx!: number
  status: boolean = false;
  toggle(){
    this.status = !this.status;
    this.task.done = !this.task.done
    localStorage.save()
  }
  delete() {

  }
  ngOnInit() {
    this.status = this.task.done || false
    this.task.idx = this.idx
  }
}
