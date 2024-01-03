export default class {
  constructor (
     public name: string,
     public desc: string,
     public done_date: null | Date = null,
     public creation_date = Date.now()
  ){ }
}


