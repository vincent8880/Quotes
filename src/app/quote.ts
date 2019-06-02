export class Quote {
  public showDescription: boolean;
  constructor(public id: number, public name:string,public description:string,public upvotes:number, public downvotes:number){
    this.showDescription = false;
  }
}
