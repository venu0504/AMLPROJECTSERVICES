export class Case1 {
  id: number;
  entity: string;
  casename: string;
  ids: number;
  mandatory: string;
  worldcheck: string;
  ogs: string;
  archived: string;
  asignee: string;


  constructor(customer) {
    this.id = customer.caseId;
    this.entity = customer.entity;
    this.casename = customer.casename;
    this.ids = customer.ids;
    this.mandatory = customer.mandatory;
    this.worldcheck = customer.worldcheck;
    this.ogs = customer.ogs;
    this.archived = customer.archived;
    this.asignee = customer.asignee;
  }

  get name() {
    return this.casename;
  }

  set name(value) {
  }

}
