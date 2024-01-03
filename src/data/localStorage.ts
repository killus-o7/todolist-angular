import Task from "./Task"

class LocalStorage {
  data: Array<Task> = []

  fetch (): void {
    const json = localStorage.getItem("tasks")
    this.data = JSON.parse(json || "")
  }

  save (): void {
    const json = JSON.stringify(this.data)
    localStorage.setItem("tasks", json)
  }
}
