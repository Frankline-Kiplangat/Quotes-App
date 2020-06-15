export class Quote {
    public showDetails:boolean;
    constructor(public id:number,public message:string, public details:string, public entryDate:Date ){
      this.showDetails=false;
    }
  }
//   public like:number
//   public dislike:number
//   public completeDate:Date
//   constructor(public name:string, public author:string,public quote:string){
//     this.like =0;
//     this.dislike =0;
//     this.completeDate=new Date;
//   }
// }