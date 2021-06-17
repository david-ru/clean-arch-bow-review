import { Injectable } from "@angular/core";
import { BowRepository } from "../repositories/bow.repository";
import { UseCase } from "../base/use-case";
import { BowModel } from "../domain/bow.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GetAllBowsUsecase implements UseCase<void, BowModel> {
  constructor(private bowRepository: BowRepository) {}

  execute(params: void): Observable<BowModel> {
    return this.bowRepository.getAllBows();
  }
}
