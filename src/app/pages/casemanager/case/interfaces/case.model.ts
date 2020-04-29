export class Case {
  primaryName: string;
  matchedNameType:any;
  matchStrength: string;
  categories: string;
  gender: string;  
  dateOfBirth: string;
  placeOfBirth: any;
  nationality: any;
  residence: any;
  category: any;
  referenceId: string;
  creationDate: any;
  matchedDate:any;
  modificationDate: any;
  lastResolvedOrReviewedBy: string;
  lastResolvedOrReviewedDate: any;
  riskLevel: any;

  constructor(customer) {
    this.primaryName = customer.primaryName;
    this.matchedNameType = customer.matchedNameType;
    this.matchStrength = customer.matchStrength;
    this.categories = customer.categories;
    this.gender = customer.gender;
    this.dateOfBirth = customer.dateOfBirth;
    this.placeOfBirth = customer.placeOfBirth;
    this.nationality = customer.nationality;
    this.residence = customer.residence;
    this.category = customer.category;
    this.referenceId = customer.referenceId;
    this.creationDate = customer.creationDate;
    this.matchedDate = customer.matchedDate;
    this.modificationDate = customer.modificationDate;
    this.lastResolvedOrReviewedBy = customer.lastResolvedOrReviewedBy;
    this.lastResolvedOrReviewedDate = customer.lastResolvedOrReviewedDate;
    this.riskLevel = customer.riskLevel;
   }

  // get name() {
  //   return this.statename;
  // }

  // set name(value) {
  // }
  
 }
// "dateResolved": null,
// "entityType": "INDIVIDUAL",
// "gender": "MALE",
// "name": "Vladimir FARUTIN",
// "reasonId": null,
// "referenceId": "e_tr_wci_2133069",
// "resultId": "0a3687d0-6b99-1bdd-9afe-d2c300ec32ec",
// "reviewRequired": false,
// "riskId": null,
// "score": 0.9548068,
// "strength": "STRONG",
// "statusId": null,
// "providerCategory": ["Law Enforcement"],
// "dateOfBirth": [{
//   "utcDateTime": 189302400000,
//   "timeZone": null,
//   "timelinePrecision": "ON",
//   "pointInTimePrecision": "YEAR"
// }, {
//   "utcDateTime": 157766400000,
//   "timeZone": null,
//   "timelinePrecision": "ON",
//   "pointInTimePrecision": "YEAR"
// }],
// "placeOfBirth": [],
// "placeOfBirthCountry": [],
// "deceasedDate": [],
// "identification": [],
// "identificationDocument": [],
// "matchedNameType": ["NATIVE_AKA"],
// "matchedTerm": [{
//   "term": "ФАРУТИН,Владимир",
//   "type": "NATIVE_AKA"
// }],
// "countryLocation": ["RUS"],
// "residence": ["RUS"],
// "registeredCountry": [],
// "nationality": ["RUS"],
// "resolutionStatus": null,
// "riskLevel": {
//   "risk": null,
//   "remark": null
// },
// "reviewRemark": null,
// "resolutionReason": null,
// "category": "CRIME - NARCOTICS",
// "keywords": ["RUPGO"],
// "updateCategory": "C1",
// "creationDate": {
//   "utcDateTime": 1380758400000,
//   "timeZone": null,
//   "timelinePrecision": "ON",
//   "pointInTimePrecision": "DAY"
// },
// "modificationDate": {
//   "utcDateTime": 1393804800000,
//   "timeZone": null,
//   "timelinePrecision": "ON",
//   "pointInTimePrecision": "DAY"
// },
// "lastResolvedOrReviewedDate": null,
// "matchedDate": {
//   "utcDateTime": 1563289128563,
//   "timeZone": null,
//   "timelinePrecision": "ON",
//   "pointInTimePrecision": "DAY"
// },
// "lastResolvedOrReviewedBy": null,
// "removedDate": null,
// "deceased": false
// }


// 0: "name" 
// 1: "matchedNameType": 
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


// name
// matched alias
//Match Strength
// type
//gender
//dob
//place of birth
//nationality
// country location
//category
//world check id
//entered date
// updated date
//matched date
//last resolved/reiewed on
//last resolved/ reviewed by
// risk level