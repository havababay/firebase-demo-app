export class Reservation {

  constructor(
    public id : string,
    public resturantId : string,
    public userId: string,
    public date : Date,
    public numOfPeople : number
  ) { }

}
