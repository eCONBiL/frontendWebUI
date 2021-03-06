export interface SingleBL {
    blNumber: string;
    dateOfIssue: string;
    placeOfIssue: string;

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

    incoterms: string;
    freightChargesCurrency: string;
    prepaid: string;
    collect: string;
    portOfLoading: string;
    portOfDischarge: string;
    placeOfReceipt: string;
    placeOfDelivery: string;
    oceanVesselName: string;
    containerNumber: string;
    fullContainerLoad:string;
    lessThenContainerLoad:string;
    shippedOnBoardDate: string;

    marksAndNumbers: string;
    numberOfPackages: string;
    grossWeight: string;
    grossWeightUnit: string;
    descriptionOfGoods: string;
    descriptionPerPackage: string;
    measurement: string;
    measurementUnit: string;
    declaredCargoValueAmount: string;
    declaredCargoValueCurrency: string;
    additionalInformation: string;
    hazardousMaterial: string;

    customerOrderNumber: string;

    transportConditions: string;
    applieableLaw: string;
    placeOfJurisdiction: string;

    orderDate: string;
    orderTo: string;
    orderAt: string;
    orderCheckbox: boolean;
    blTransferable: boolean;
}
