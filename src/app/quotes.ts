export class Quote {
    public like:number
    public dislike:number
    public completeDate:Date
    constructor(public name:string, public author:string,public quote:string){
      this.like =0;
      this.dislike =0;
      this.completeDate=new Date;
    }
  }
  