export interface BowModel {
  id: string;
  informationFromManufacturer: {
    company: string;
    name: string;
    design: string;
    style: string;
    lengthStrung: number;
    lengthUnstrung: number;
    stringLength: number;
    braceHeightMin: number;
    braceHeightMax: number;
    drawWeight: number;
    drawWeightLength: number;
    availableDrawWeightMin: number;
    availableDrawWeightMax: number;
    maxDraw: number;
    recommendedArrowWeight: null,
    stringMaterials: string,
    bowMaterials: Array<string>;
    options: null,
    price: number;
    shipping: number;
    currency: string;
  },
  checkedMeasurements: {
    bowLengthNockToNock: number;
    arrowPassWidth: number;
    bowWeight: number;
    drawWeight28: number;
    realBowDrawWeight: number;
    drawWeightMaxDraw: number;
    fValue: number;
    stringAngleOf60DegreesAt: number;
    speed: Array<Object>;
  },
  points: number;
  priceValue: number;
  picture: string;
}
