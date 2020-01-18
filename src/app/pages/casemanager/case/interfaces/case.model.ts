export class Case {
  id: number;
  countryid: number;
  statecode: string;
  statename: string;
  status: boolean;
  countryname: string;


  constructor(customer) {
    this.id = customer.id;
    this.countryid = customer.countryid;
    this.statecode = customer.statecode;
    this.status = customer.status;
    this.statename = customer.statename;
    this.countryname = customer.countryname;
   }

  get name() {
    return this.statename;
  }

  set name(value) {
  }
  
}
