
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