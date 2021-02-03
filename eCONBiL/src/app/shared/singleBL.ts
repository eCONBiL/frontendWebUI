export interface SingleBL {
    
    blNumber: string;
    dateOfIssue: string;
    placeOfIssue: string;
    numberOfBLIssued: number;
    shipperName: string;
    shipperAddress: string;
    shipperContact: string;
    shipperLegalForm: string;
    consigneeName: string;
    consigneeAddress: string;
    consigneeContact: string;
    consigneeLegalForm: string;
    carrierName: string;
    carrierAddress: string;
    carrierContact: string;
    carrierLegalForm: string;
    carrierTrailerNumber: string;
    agentCompanyName: string;
    agentCompanyLegalForm: string;
    agentCompanyAddress: string;
    notifyPartyCompanyName: string;
    notifyPartyCompanyAddress: string;
    notifyPartyCompanyLegalForm: string;
    notifyPartySameAs: boolean;
    incoterms: string;
    freightChargesCurrency: string;
    prepaid: boolean;
    collect: boolean;
    portOfLoading: string;
    portOfDischarge: string;
    placeOfReceipt: string;
    placeOfDelivery: string;
    oceanVesselName: string;
    containerNumber: string;
    fullContainerLoad:boolean
    lessThenContainerLoad:boolean;
    dateofReceived: string;
    shippedOnBoardDate: string;
    marksAndNumbers: string;
    numberOfPackages: number;
    grossWeight: number;
    grossWeightUnit: string;
    descriptionOfGoods: string;
    
}
