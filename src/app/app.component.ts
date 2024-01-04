import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from "./task/task.component";
import storage from "../data/localStorage";
import {FormComponent} from "./form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TaskComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'todolist';
  protected readonly storage = storage;
}
