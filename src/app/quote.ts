<<<<<<< HEAD
export class Quote {
  public showDescription:boolean;
  public maxCount:number=0;
  constructor(public id:number, public name:string, public description:string,public author:string, public completeDate:Date, public upvote:number, public downvote:number){
    this.showDescription=false
    this.upvote=0
    this.downvote=0
  }
}
=======

export class quotes{
  upvotes :number;
  downvotes: number;
  showDetails: boolean;
  constructor(public id:number,public message:string, public details:string, public entryDate:Date ){
    this.upvotes = 0;
    this.downvotes= 0 ;
    this.showDetails= false;
}
}
>>>>>>> c949f446eaa418e47b5cac74a14cf36d51aa103f
