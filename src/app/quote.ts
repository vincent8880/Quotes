export class Quote {
  public showDescription: boolean;
  constructor(public id: number, public name:string,public description:string,public vote:number,public date:Date){
    this.showDescription = false;
  }
}
