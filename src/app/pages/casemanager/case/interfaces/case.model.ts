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
// 0: "name"
// 1: "matchedNameType"
// 2: "strength"
// 3: "providerCategory"
// 4: "gender"
// 5: "dateOfBirth"
// 6: "identification"
// 7: "identificationDocument"
// 8: "placeOfBirthCountry"
// 9: "nationality"
// 10: "residence"
// 11: "countryLocation"
// 12: "category"
// 13: "referenceId"
// 14: "creationDate"
// 15: "modificationDate"
// 16: "matchedDate"
// 17: "lastResolvedOrReviewedDate"
// 18: "lastResolvedOrReviewedBy"
// 19: "riskLevel"
// 20: "deceasedDate"
// 21: "isDeceased"