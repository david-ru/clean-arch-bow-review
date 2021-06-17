import { BowModel } from "../../../core/domain/bow.model";
import { Mapper } from "../../../core/base/mapper";
import { BowMockEntity } from "./bow-mock-entity";

export class BowMockRepositoryMapper extends Mapper<BowMockEntity, BowModel> {
  mapFrom(param: BowMockEntity): BowModel {
    return {
      id: param.idBow,
      informationFromManufacturer: {
        company: param.informationFromManufacturer.strCompany,
        name: param.informationFromManufacturer.strBow,
        design: param.informationFromManufacturer.strDesign,
        style: param.informationFromManufacturer.strStyle,
        lengthStrung: param.informationFromManufacturer.lengthStrung,
        lengthUnstrung: param.informationFromManufacturer.lengthUnstrung,
        stringLength: param.informationFromManufacturer.stringLength,
        braceHeightMin: param.informationFromManufacturer.braceHeightMin,
        braceHeightMax: param.informationFromManufacturer.braceHeightMax,
        drawWeight: param.informationFromManufacturer.drawWeight,
        drawWeightLength: param.informationFromManufacturer.drawWeightLength,
        availableDrawWeightMin: param.informationFromManufacturer.availableDrawWeightMin,
        availableDrawWeightMax: param.informationFromManufacturer.availableDrawWeightMax,
        maxDraw: param.informationFromManufacturer.maxDraw,
        recommendedArrowWeight: param.informationFromManufacturer.recommendedArrowWeight,
        stringMaterials: param.informationFromManufacturer.stringMaterials,
        bowMaterials: param.informationFromManufacturer.bowMaterials,
        options: param.informationFromManufacturer.options,
        price: param.informationFromManufacturer.price,
        shipping: param.informationFromManufacturer.shipping,
        currency: param.informationFromManufacturer.strCurrency,
      },
      checkedMeasurements: {
        bowLengthNockToNock: param.checkedMeasurements.bowLengthNockToNock,
        arrowPassWidth: param.checkedMeasurements.arrowPassWidth,
        bowWeight: param.checkedMeasurements.bowWeight,
        drawWeight28: param.checkedMeasurements.drawWeight28,
        realBowDrawWeight: param.checkedMeasurements.realBowDrawWeight,
        drawWeightMaxDraw: param.checkedMeasurements.drawWeightMaxDraw,
        fValue: param.checkedMeasurements.fValue,
        stringAngleOf60DegreesAt: param.checkedMeasurements.stringAngleOf60DegreesAt,
        speed: param.checkedMeasurements.speed
      },
      points: param.points,
      priceValue: param.priceValue,
      picture: param.picture
    };
  }

  mapTo(param: BowModel): BowMockEntity {
    return {
      idBow: "",
      informationFromManufacturer: {
        strCompany: param.informationFromManufacturer.company,
        strBow: param.informationFromManufacturer.name,
        strDesign: param.informationFromManufacturer.design,
        strStyle: param.informationFromManufacturer.style,
        lengthStrung: param.informationFromManufacturer.lengthStrung,
        lengthUnstrung: param.informationFromManufacturer.lengthUnstrung,
        stringLength: param.informationFromManufacturer.stringLength,
        braceHeightMin: param.informationFromManufacturer.braceHeightMin,
        braceHeightMax: param.informationFromManufacturer.braceHeightMax,
        drawWeight: param.informationFromManufacturer.drawWeight,
        drawWeightLength: param.informationFromManufacturer.drawWeightLength,
        availableDrawWeightMin: param.informationFromManufacturer.availableDrawWeightMin,
        availableDrawWeightMax: param.informationFromManufacturer.availableDrawWeightMax,
        maxDraw: param.informationFromManufacturer.maxDraw,
        recommendedArrowWeight: param.informationFromManufacturer.recommendedArrowWeight,
        stringMaterials: param.informationFromManufacturer.stringMaterials,
        bowMaterials: param.informationFromManufacturer.bowMaterials,
        options: param.informationFromManufacturer.options,
        price: param.informationFromManufacturer.price,
        shipping: param.informationFromManufacturer.shipping,
        strCurrency: param.informationFromManufacturer.currency,
      },
      checkedMeasurements: {
        bowLengthNockToNock: param.checkedMeasurements.bowLengthNockToNock,
        arrowPassWidth: param.checkedMeasurements.arrowPassWidth,
        bowWeight: param.checkedMeasurements.bowWeight,
        drawWeight28: param.checkedMeasurements.drawWeight28,
        realBowDrawWeight: param.checkedMeasurements.realBowDrawWeight,
        drawWeightMaxDraw: param.checkedMeasurements.drawWeightMaxDraw,
        fValue: param.checkedMeasurements.fValue,
        stringAngleOf60DegreesAt: param.checkedMeasurements.stringAngleOf60DegreesAt,
        speed: param.checkedMeasurements.speed
      },      
      points: param.points,
      priceValue: param.priceValue,
      picture: param.picture
    };
  }
}
