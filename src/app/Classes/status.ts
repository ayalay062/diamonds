
export class Status {
    constructor(
        public diamondStatusId:number,
        public statusId:number,
        public statusName:string,
        public diamondId:number,
        public diamondName:string,
        public startDate:Date,
        public endDate:Date,
        public professionalId:number,
        public professionalName:string, 
        public price:number
    )
    {};
}
