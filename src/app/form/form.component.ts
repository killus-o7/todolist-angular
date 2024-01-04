import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import localStorage from "../../data/localStorage";
import Task from "../../data/Task";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass'
})
export class FormComponent {
  name: string = ""
  desc: string = ""
  @Output() messageEvent = new EventEmitter();

  onSubmit() {
    localStorage.data.push(
      new Task(this.name, this.desc)
    )
    localStorage.save()
    location.reload()
  }
}
