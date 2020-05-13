export class CaseSummary {
    categories: string[]; //type
    primaryName: string; //name
    resolutionDate: string;
    resolutionRemark: string;
    matchStrength: string;
    resolutionStatus: string;
    risk: string;
    resolutionReason: string;


    constructor(customer) {
      this.categories = customer.categories;
      this.primaryName = customer.primaryName;
      this.resolutionDate = customer.resolutionDate;
      this.resolutionRemark = customer.resolutionRemark;
      this.matchStrength = customer.matchStrength;
      this.resolutionStatus = customer.resolutionStatus;
      this.risk = customer.risk;
      this.resolutionReason = customer.resolutionReason;
     }
  

    
   }