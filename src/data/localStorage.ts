import Task from "./Task"

class LocalStorage {
  data: Array<Task> = []
  constructor (){ this.fetch() }
  save (): void {
    const json = JSON.stringify(this.data)
    localStorage.setItem("tasks", json)
  }
  private fetch (): void {
    const json = localStorage.getItem("tasks")
    this.data = JSON.parse(json || "[]")
  }
}

export default new LocalStorage()
