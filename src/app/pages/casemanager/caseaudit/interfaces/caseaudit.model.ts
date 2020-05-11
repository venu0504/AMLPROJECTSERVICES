export class CaseAudit {
    eventDate: string;
    actionedByUserName: string;
    note: string;
    actionType: string;

  
    constructor(customer) {
      //this.primaryName = customer.primaryName;
      this.eventDate= customer.eventDate;
      this.actionedByUserName = customer.actionedByUserName;
      this.note = customer.note;
      this.actionType = customer.actionType;
     }
  

    
   }
//    id: "0a3687cf-6b99-1b60-9afe-d2f100edb348"
//    objectId: "0a3687cf-6b99-1f52-9afe-d2f000707848"
//    eventDate: "2019-07-16T14:59:35.098Z"
//    actionedByUserId: "0a3687d0-6a9c-1394-9aa8-fb0e000002da"
//    actionedByUserName: "Moe Alharazi"
//    note: null
//    entityType: "CASE"
//    actionType: "SCREENED_CASE"
//    auditEventToDate: null,
//    details: {
//    detailsType: "ScreenCaseAuditDetails"
//    userId: null
//    statusCode: "COMPLETED"
//    screeningState: "INITIAL"
//    noOfNewResults: 3
//    noOfReviewRequiredResults: 0
//    noOfExcludedResults: 0
//    noOfAutoResolvedResults: 0
//    providerTypes: ["WATCHLIST"]
//    caseScreenRequestor: null
//    caseSystemId: "0a3687cf-6b99-1f52-9afe-d2f000707848"
//    }