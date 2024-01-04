export default class {
  public date = ""
  constructor (
     public name: string,
     public desc: string,
     public idx: number = 0,
     public done: boolean = false,
     public creation_date = new Date(Date.now())
  ){
    let d = this.creation_date
    this.date = `${d.getDay()}.${d.getMonth()} ${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}`
    this.date = "aha"
  }
}


