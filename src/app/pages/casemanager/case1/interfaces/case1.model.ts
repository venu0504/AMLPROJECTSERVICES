export class Case1 {
  caseId: string;
  entityType: string;
  name: string;// casename
  totalMatches: string; //mandatory Actions
  worldcheckUnResolved: string;
  worldCheckReviewRequired: string;
  caseScreeningState: string; // ongoing screening status
  lifecycleState: string; //archieved
  asignee: string;
  lastModifiedBy: string;
  modificationDate: string; //Last Modified Date
  createdBy: string;
  creationDate: string;
  lastScreenedDate: string;


  constructor(customer) {
    this.caseId = customer.caseId;
    this.entityType = customer.entityType;
    this.name = customer.name;
    this.totalMatches = customer.totalMatches;
    this.worldcheckUnResolved = customer.worldcheckUnResolved;
    this.worldCheckReviewRequired = customer.worldCheckReviewRequired;
    this.caseScreeningState = customer.caseScreeningState;
    this.lifecycleState = customer.lifecycleState;
    this.asignee = customer.asignee;
    this.lastModifiedBy = customer.lastModifiedBy;
    this.modificationDate = customer.modificationDate;
    this.createdBy = customer.createdBy;
    this.creationDate = customer.creationDate;
    this.lastScreenedDate = customer.lastScreenedDate
  }

  // get name() {
  //   return this.caseName;
  // }

  // set name(value) {
  // }

}
// 1) Entity Type => entityType
// 2) Case Name => name
// 3) ID => caseId
// 4) Mandatory Actions => totalMatches
// 5) World - Check : Unresolved => unresolved
// 6) World - Check : Review Required => reviewRequired
// 7) Ongoing Screening => caseScreeningState
// 8) Archived => lifecycleState
// 9) Assignee => "assignee":
// 10) Last Modified By => modifier": {"fullName"}
// 12 Last Modified Date => modificationDate
// 13) Created By => creator { "fullName" }
// 14 Created Date => creationDate" 
// 15) Last Screening Date => lastScreenedDate