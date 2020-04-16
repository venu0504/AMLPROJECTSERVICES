export class Case1 {
  caseId: string;
  entity: string;
  caseName: string;
  totalMatches: string; //mandatory Actions
  worldcheckUnResolved: string;
  worldCheckReview: string;
  ongoingScreening: string;
  archived: string;
  asignee: string;
  lastModifiedBy: string;
  modificationDate: string; //Last Modified Date
  createdBy: string;
  createdDate: string;
  lastScreenedDate: string;


  constructor(customer) {
    this.caseId = customer.caseId;
    this.entity = customer.entity;
    this.caseName = customer.caseName;
    this.totalMatches = customer.totalMatches;
    this.worldcheckUnResolved = customer.worldcheckUnResolved;
    this.worldCheckReview = customer.worldCheckReview;
    this.ongoingScreening = customer.ongoingScreening;
    this.archived = customer.archived;
    this.asignee = customer.asignee;
    this.lastModifiedBy = customer.lastModifiedBy;
    this.modificationDate = customer.modificationDate;
    this.createdBy = customer.createdBy;
    this.createdDate = customer.createdDate;
    this.lastScreenedDate = customer.lastScreenedDate
  }

  // get name() {
  //   return this.caseName;
  // }

  // set name(value) {
  // }

}
// 1)Entity Type            =>
// 2)Case Name              =>
// 3)ID                  => caseId
// 4) Mandatory Actions   =>totalMatches
// 5) World-Check : Unresolved  => unresolved
// 6) World-Check : Review Required => reviewRequired
// 7) Ongoing Screening =>  screeningStatus (I dought)
// 8) Archived  =>
// 9) Assignee =>
// 10)Last Modified By => modifier": {"fullName"}
// 12 Last Modified Date => modificationDate
// 13)Created By =>creator {"fullName"}
// 14 Created Date =>
// 15) Last Screening Date =>lastScreenedDate